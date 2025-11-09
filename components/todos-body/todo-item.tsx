import { cn } from "@/lib/utils";
import Image from "next/image";

type props = {
  id: number;
  content: string;
  completed: boolean;
  className?: string;
};
export const TodoItem = ({ id, content, completed, className }: props) => {
  return (
    <div
      className={cn(
        "h-18 px-6 overflow-hidden flex items-center justify-between text-xl cursor-pointer border-border border border-x-0 border-t-0 last:border-0 group",
        className
      )}
    >
      <div className="flex items-center gap-5">
        {completed ? (
          <div className="h-6 w-6 rounded-full border-none check flex items-center justify-center">
            <Image
              src="/images/icon-check.svg"
              alt="check icon"
              height={6}
              width={8.7}
              className="w-[8.7px] h-2.5"
            />
          </div>
        ) : (
          <div className="h-6 w-6 rounded-full border-border border hover:border-2 check-border"></div>
        )}
        <p
          className={cn(
            completed ? "line-through dark:text-gray-600 text-gray-400" : ""
          )}
        >
          {content}
        </p>
      </div>

      <Image
        src="/images/icon-cross.svg"
        alt="cross icon"
        height={17.68}
        width={17.68}
        className="w-[17.68px] h-[17.68px] hidden group-hover:block transition-all duration-75"
      />
    </div>
  );
};
