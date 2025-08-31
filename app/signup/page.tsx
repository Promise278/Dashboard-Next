"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface RegisterData {
    name: string,
    email: string,
    password: string,
    team_name: string,
}

function SignUp() {
    const [formData, setFormData] = useState<RegisterData>({
      name: "",
      email: "",
      password: "",
      team_name: "",
    })

    const router = useRouter();
    

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.password || !formData.team_name) {
          toast.error("All fields are required!");
          return;
      }

      try {
        const res = await fetch("https://test.blockfuselabs.com/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      
        const data = await res.json();
        toast.success("Registered Successfully");
      
        console.log("Response from API:", data);
      
        setFormData({ name: "", email: "", password: "", team_name: "" });

        router.push("/signin");
      
        } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong. Try again!");
      }   
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="bg-white rounded-xl shadow-lg px-6 py-6 w-full max-w-md">
        {/* Heading */}
        <h1 className="text-center font-bold text-3xl text-gray-800 mb-2">
          Registration Form
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Fill out the form carefully for registration
        </p>

        {/* FormField */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="font-semibold text-gray-700 block mb-2"
            >
              Full Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              placeholder="Your full name"
            //   required
              className="border-2 border-blue-500 px-3 py-2 rounded-md w-full focus:outline-none focus:border-green-500"
            />
          </div>

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
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value})}
              placeholder="Your email.."
            //   required
              className="border-2 border-blue-500 px-3 py-2 rounded-md w-full focus:outline-none focus:border-green-500"
            />
          </div>

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
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value})}
              placeholder="Enter password.."
            //   required
              minLength={6}
              className="border-2 border-blue-500 px-3 py-2 rounded-md w-full focus:outline-none focus:border-green-500"
            />
            <p className="text-gray-400 text-sm mt-1">
              Must be at least 6 characters
            </p>
          </div>

          <div>
            <label
              htmlFor="team_name"
              className="font-semibold text-gray-700 block mb-2"
            >
              Participant Team
            </label>
            <select
              value={formData.team_name}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value})}
              name="team_name"
            //   required
              className="border-2 border-blue-500 px-3 py-2 rounded-md w-full focus:outline-none focus:border-green-500"
            >
              <option value="">
                Select a team
              </option>
              <option value="404">404</option>
              <option value="Pull Request">Pull Request</option>
              <option value="Elon">Elon</option>
              <option value="Phoenix">Phoenix</option>
              <option value="Titans">Titans</option>
            </select>
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
  );
}

export default SignUp;