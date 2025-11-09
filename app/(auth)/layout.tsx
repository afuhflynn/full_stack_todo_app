import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Auth | Todo app",
  description: "Create your account or signin to access your todos",
};

export default async function Layout({ children }: props) {
  const session = await auth.api.getSession({ headers: await headers() });

  // NOTE: This will certainly change of there are pages such as forgot password or reset password
  if (session) {
    redirect("/");
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
