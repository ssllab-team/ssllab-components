"use client";

import { PopoverContent } from "@/components/ui/popover";

export default function Danger(props: { text: string; onClick: () => void }) {
  return (
    <PopoverContent
      className="px-6 py-2 w-fit bg-gray-0 rounded-lg border-[0.8px] border-gray-200 cursor-pointer select-none hover:bg-gray-200 active:border-gray-300"
      style={{
        boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.06)"
      }}
      onClick={props.onClick}
    >
      <div className="text-caption-12 font-regular text-error-red">{props.text}</div>
    </PopoverContent>
  );
}
