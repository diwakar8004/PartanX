"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

// Store registered users in a local array
const registeredUsers: Array<{
  id: number;
  name: string;
  email: string;
  password: string;
}> = [];
let userIdCounter = 1;
if (typeof window !== "undefined") {
  try {
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    users.forEach((u: any) => registeredUsers.push(u));
    userIdCounter = users.length > 0 ? Math.max(...users.map((u: any) => u.id)) + 1 : 1;
    // @ts-ignore
    window.__registeredUsers = registeredUsers;
  } catch {}
}

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  // Dynamic captcha
  const [captcha, setCaptcha] = useState("");
  const [num1, setNum1] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [captchaKey, setCaptchaKey] = useState(0);
  const captchaQuestion = `What is ${num1} + ${num2}?`;
  const captchaAnswer = (num1 + num2).toString();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (captcha !== captchaAnswer) {
      setError("Captcha answer is incorrect.");
      setNum1(Math.floor(Math.random() * 10) + 1);
      setNum2(Math.floor(Math.random() * 10) + 1);
      setCaptcha("");
      setCaptchaKey((prev) => prev + 1);
      return;
    }
    setError("");
    // Save user info in array and localStorage
    registeredUsers.push({ id: userIdCounter++, name, email, password });
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.__registeredUsers = registeredUsers;
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    }
    alert("Registration successful!");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setCaptcha("");
    setCaptchaKey((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-card rounded-xl shadow-2xl p-8">
            <div className="flex flex-col items-center mb-6">
              <span className="bg-primary/10 rounded-full p-3 mb-2">
                <Lock className="h-8 w-8 text-primary" />
              </span>
              <h2 className="text-3xl font-bold text-center text-primary">
                Register
              </h2>
            </div>
            <form onSubmit={handleRegister} className="space-y-5">
              {error && (
                <div className="text-red-500 text-sm text-center mb-2">
                  {error}
                </div>
              )}
              <div>
                <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 dark:bg-background"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 dark:bg-background"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 dark:bg-background"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 dark:bg-background"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
                  Captcha Verification
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-base font-medium text-gray-700 dark:text-gray-200">
                    {captchaQuestion}
                  </span>
                  <input
                    key={captchaKey}
                    type="text"
                    className="w-24 px-2 py-2 border border-gray-300 dark:border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 dark:bg-background"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    required
                    placeholder="Answer"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full rounded-full text-base font-semibold py-2 bg-primary hover:bg-primary/90 transition-all duration-200 shadow"
              >
                Register
              </Button>
            </form>
            <div className="mt-6 text-center">
              <span className="text-muted-foreground">
                Already have an account?{" "}
              </span>
              <Link href="/login" className="text-primary underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
