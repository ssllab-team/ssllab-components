import { ChangeEvent } from "react";
import { inputBaseClass } from "..";
import Icon from "../../icon";

export default function Search(props: { onChange?: (e: string) => void; value?: string; placeholder?: string }) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    props.onChange && props.onChange(value);
  };
  return (
    <div className="relative w-full">
      <input
        onChange={handleChange}
        placeholder={props.placeholder}
        value={props?.value}
        name={props.placeholder}
        className={inputBaseClass + " border-none"}
      />
      <div className="absolute right-2 top-1 bottom-1 w-8 h-8 grid place-items-center rounded-xl hover:bg-gray-200 duration-200">
        <Icon.Magnifier color="700" size={18} />
      </div>
    </div>
  );
}
