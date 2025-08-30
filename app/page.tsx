import React from "react";
import Nav from './Nav'
import Link from "next/link";

export default function App() {
  return (
    <>
     <main className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-300 to-lime-200 min-h-screen">
        <h2 className="text-3xl font-semibold mb-4">🔒 Access Restricted</h2>
        <p className="text-gray-600 mb-6">
          You must <span className="font-semibold">Sign Up</span> or{" "}
          <span className="font-semibold">Sign In</span> before you can access the dashboard.
        </p>
        <div className="space-x-4">
          <Link
            href="/signup"
            className="px-6 py-3 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
        </div>
      </main>
    </>
  );
}