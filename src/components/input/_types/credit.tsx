"use client";

import { ChangeEvent } from "react";
import { inputBaseClass } from "..";

export default function Credit(props: { onChange: (e: number) => void; value: number }) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    if (e.target.value.length > 1) {
      if (e.target.value[0] === "0") e.target.value = e.target.value.slice(1);
      else e.target.value = e.target.value[1];
    }
    const value = parseInt(e.target.value);
    if (value < 0) return;
    if (value > 10) return;
    props.onChange(value);
  };

  return (
    <input
      type="number"
      className={inputBaseClass + " !w-[72px] text-center"}
      onChange={handleChange}
      placeholder="0"
      value={props.value}
    />
  );
}
