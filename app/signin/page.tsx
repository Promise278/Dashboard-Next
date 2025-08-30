"use client"
import React, { useState } from 'react'
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


interface LoginData {
  email: string;
  password: string;
}

function SignIn() {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and password are required!");
      return;
    }

    try {
      const res = await fetch("https://test.blockfuselabs.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast.error(errorData.message || "Login failed!");
        return;
      }

      const data = await res.json();
      toast.success("Login Successful");

      console.log("Response from API:", data);

      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }

      setFormData({ email: "", password: "" });

      router.push("/dashboard");

    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Try again!");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="bg-white rounded-xl shadow-lg px-8 py-6 w-full max-w-md sm:max-w-lg">
        {/* Heading */}
        <h1 className="text-center font-bold text-3xl text-gray-800 mb-2">
          LogIn Form
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Fill out the form carefully for registration
        </p>

        {/* FormField */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="font-semibold text-gray-700 block mb-2"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              placeholder="Your email.."
              required
              className="border-2 border-blue-500 px-3 py-2 rounded-md w-full focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password1"
              className="font-semibold text-gray-700 block mb-2"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter password.."
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
              minLength={6}
              className="border-2 border-blue-500 px-3 py-2 rounded-md w-full focus:outline-none focus:border-green-500"
            />
            <p className="text-gray-400 text-sm mt-1">
              Must be at least 6 characters
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition transform hover:scale-[1.02] active:scale-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
