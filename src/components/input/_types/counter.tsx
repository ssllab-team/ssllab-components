"use client";

export default function Counter(props: { type: "plus" | "minus"; onClick: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 grid place-items-center rounded hover:bg-gray-100 duration-200" onClick={props.onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          {props.type === "plus" ? (
            <>
              <path d="M7 1V13" stroke="#60584F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 7H13" stroke="#60584F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </>
          ) : (
            <path d="M1 7H13" stroke="#60584F" strokeWidth="1.8" strokeLinecap="round" />
          )}
        </svg>
      </div>
    </div>
  );
}
