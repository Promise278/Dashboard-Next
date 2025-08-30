"use client";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="">
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600"><Link href='/'>Admin Hub</Link></h1>
        <div className="space-x-4">
          <Link
            href="/signup"
            className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
}