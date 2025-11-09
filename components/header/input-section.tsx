"use client";

import { FormEvent, useState } from "react";
import { useCreateTodo } from "@/hooks";
import { toast } from "sonner";
import { useTodoStore } from "@/lib/store";

type props = {};

export function InputSection({}: props) {
  const { input, setInput } = useTodoStore();
  const [creating, setCreating] = useState(false);
  const { mutate } = useCreateTodo();

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input || input.trim() === "") {
      toast.error("Todo input cannot be empty");
      return;
    }
    setCreating(true);
    const id = toast.loading("Creating todo...");

    try {
      mutate({ content: input });
    } catch (e: Error | any) {
      console.error(e);
      toast.error(e.message);
    } finally {
      toast.dismiss(id);
      setCreating(false);
    }
  };
  return (
    <form
      className="bg-popover h-16 px-6 rounded-[5px] overflow-hidden flex items-center gap-5"
      onSubmit={handleSubmitForm}
    >
      <div className="h-6 w-6 rounded-full border-border border" />
      <input
        className="bg-transparent outline-none focus:outline-none border-none h-full flex-1 text-xl placeholder:text-gray-400"
        placeholder="Create a new todo…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={creating}
      />
    </form>
  );
}
