import { InputSection } from "./header/input-section";
import { ThemeToggle } from "./header/theme-toggle";

export function Header() {
  return (
    <div className="flex w-full h-auto flex-col gap-10">
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
