"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

export function BackgroundWrapper() {
  const isMobile = useIsMobile();
  return (
    <div className="w-full h-full flex items-start -z-40 absolute">
      {!isMobile ? (
        <>
          <Image
            src="/images/bg-desktop-dark.jpg"
            alt="background image dark"
            width={1440}
            height={300}
            className="w-full h-[300px] hidden dark:block"
          />
          <Image
            src="/images/bg-desktop-light.jpg"
            alt="background image dark"
            width={1440}
            height={300}
            className="w-full h-[300px] dark:hidden"
          />
        </>
      ) : (
        <>
          <Image
            src="/images/bg-mobile-dark.jpg"
            alt="background image dark"
            width={200}
            height={375}
            className=" w-full h-[375px] hidden dark:block"
          />
          <Image
            src="/images/bg-mobile-light.jpg"
            alt="background image dark"
            width={200}
            height={375}
            className=" w-full h-[375px] dark:hidden"
          />
        </>
      )}
    </div>
  );
}
