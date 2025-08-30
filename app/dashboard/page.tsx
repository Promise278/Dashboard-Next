// import React from 'react'

// function Dashboard() {
//   return (
//     <div>
//       Dashboard
//     </div>
//   )
// }

// export default Dashboard
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
  email: string;
  team_name: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/signin");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-blue-700 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Admin Hub</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-gray-200">Dashboard</a>
          <a href="#" className="block hover:text-gray-200">Profile</a>
          <a href="#" className="block hover:text-gray-200">Settings</a>
          <button onClick={handleLogout} className="mt-8 text-red-300 hover:text-red-400">Logout</button>
        </nav>
      </div>

      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          {user && (
            <div className="flex items-center gap-3">
              <span className="text-gray-700">{user.name}</span>
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {user.name.charAt(0)}
              </div>
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-gray-500">Projects</h2>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-gray-500">Tasks Completed</h2>
            <p className="text-2xl font-bold">34</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-gray-500">Messages</h2>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="text-gray-600">✅ Logged in successfully</li>
            <li className="text-gray-600">📂 Joined team <b>{user?.team_name}</b></li>
            <li className="text-gray-600">⚡ Started a new project</li>
          </ul>
        </div>
      </div>
    </div>
  );
}