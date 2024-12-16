import { ChangeEvent } from "react";
import { inputBaseClass } from "..";

export default function Credit(props: { onChange: (e: number) => void; value?: number }) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
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
