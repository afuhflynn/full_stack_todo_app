"use client";

import { useSession } from "@/lib/auth-client";
import { InputSection } from "./header/input-section";
import { ThemeToggle } from "./header/theme-toggle";
import Image from "next/image";

export function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex w-full h-auto flex-col gap-10">
      {session && (
        <div className="flex items-center gap-4">
          <Image
            src={session.user.image!}
            alt="image"
            width={40}
            height={40}
            className="rounded-full object-contain size-10"
          />
          <h3 className="text-white text-xl font-semibold">
            {session.user.name}
          </h3>
        </div>
      )}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-white whitespace-break-spaces text-4xl space-x-4 font-bold">
          <span>T</span>
          <span>O</span>
          <span>D</span>
          <span>O</span>
        </h1>
        <ThemeToggle />
      </div>
      <InputSection />
    </div>
  );
}
