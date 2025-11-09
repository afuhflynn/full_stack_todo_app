"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Loader2, Key } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSignin = async () => {
    await signIn.email(formData, {
      onRequest: (ctx) => {
        setLoading(true);
      },
      onResponse: (ctx) => {
        setLoading(false);
      },
      onSuccess: () => {
        toast.success("Logged in successfully");
        router.push("/");
      },

      onError: (ctx) => {
        toast.error(ctx.error.message);
      },
    });
  };
  return (
    <Card className="max-w-full w-96">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) => {
                handleInputChange(e.target.name, e.target.value);
              }}
              value={formData.email}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>

            <Input
              id="password"
              type="password"
              placeholder="password"
              name="password"
              autoComplete="password"
              onChange={(e) => {
                handleInputChange(e.target.name, e.target.value);
              }}
              value={formData.password}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
            onClick={handleSignin}
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <p> Login </p>
            )}
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p className="text-sm flex items-center gap-2">
          <span>Don&apos;t have an account?</span>
          <Link
            href="/signup"
            className="hover:underline text-primary"
            prefetch
          >
            Sign Up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
