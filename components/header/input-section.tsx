"use client";

import { useState } from "react";

type props = {};

export function InputSection({}: props) {
  const [input, setInput] = useState("");
  return (
    <div className="bg-popover h-16 px-6 rounded-[5px] overflow-hidden flex items-center gap-5">
      <div className="h-6 w-6 rounded-full border-border border" />
      <input
        className="bg-transparent outline-none focus:outline-none border-none h-full flex-1 text-xl placeholder:text-gray-400"
        placeholder="Create a new todo…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
