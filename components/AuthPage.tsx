"use client";

import React, { useState } from "react";
import axios from "axios";

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL; // Replace with your API base URL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = isLogin ? `${API_URL}/sign-in` : `${API_URL}/sign-up`;
      const payload = isLogin ? { email, password } : { name, email, password };

      const { data } = await axios.post<AuthResponse>(endpoint, payload);

      // Save token to localStorage or cookie
      localStorage.setItem("token", data.token);

      alert(`${isLogin ? "Login" : "Signup"} successful!`);
      // You can redirect using next/router or navigate()
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0c10] to-[#1a1c22] flex items-center justify-center px-4">
      <div className="bg-[#101216] border border-[#1f2329] shadow-xl rounded-2xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? (
            <>
              <span className="text-green-400">Cook</span> In
            </>
          ) : (
            <>
              <span className="text-green-400">Join</span> the Lab
            </>
          )}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded-lg bg-[#1a1d24] border border-[#2b2f36] focus:border-green-400 outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-[#1a1d24] border border-[#2b2f36] focus:border-green-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-[#1a1d24] border border-[#2b2f36] focus:border-green-400 outline-none"
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 font-semibold transition-all"
          >
            {loading
              ? "Processing..."
              : isLogin
              ? "Login & Break In"
              : "Sign Up & Start Cooking"}
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          {isLogin ? "New to the lab?" : "Already a member?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-400 hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
