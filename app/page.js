"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push("/products");
  //   }
  // }, [isAuthenticated, router]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    let hasError = false;

    if (!validateEmail(email)) {
      setEmailError("Invalid Email");
      hasError = true;
    }

    if (password.length < 6) {
      setPasswordError("Invalid Password");
      hasError = true;
    }

    if (!hasError) {
      login(email);
      router.push("/products");
    }
  };

  return (
    <div className="h-screen bg-gray-100">
      <header className="bg-[#3F3F3F] text-white p-6">
        <Link href="/">
          <h1 className="text-3xl font-normal">Hashtechy</h1>
        </Link>
      </header>

      <div className="flex items-center justify-center min-h-[calc(100vh-90px)] p-4">
        <Card className="w-full max-w-md bg-[#3F3F3F] text-white border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-10 px-6">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="">
                <Label
                  htmlFor="email"
                  className="text-white text-2xl font-normal"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-b border-gray-400 border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
                {emailError && (
                  <p className="text-[#B08A26] font-normal text-sm">
                    {emailError}
                  </p>
                )}
              </div>

              <div className="">
                <Label
                  htmlFor="password"
                  className="text-white text-2xl font-normal"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-b border-gray-400 border-t-0 border-l-0 border-r-0 rounded-none text-white placeholder-gray-400 focus:outline-0"
                  placeholder="Enter your password"
                />
                {passwordError && (
                  <p className="text-[#B08A26] font-normal text-sm">
                    {passwordError}
                  </p>
                )}
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-64 text-3xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-none "
                >
                  Go
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
