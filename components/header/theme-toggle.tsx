"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import Image from "next/image";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      className="outline-0 ring-0 focus-visible:outline-none border-none rounded-full h-[26px] w-[26px] p-0 bg-transparent hover:bg-transparent"
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
    >
      {theme === "light" ? (
        <Image
          src="/images/icon-moon.svg"
          alt="moon icon"
          width={26}
          height={26}
          className="w-full h-full"
        />
      ) : (
        <Image
          src="/images/icon-sun.svg"
          alt="sun icon"
          width={26}
          height={26}
          className="w-full h-full"
        />
      )}
    </Button>
  );
};
