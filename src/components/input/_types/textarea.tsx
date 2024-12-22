"use client";

import { ChangeEvent, useRef, useEffect, useState } from "react";
import { inputBaseClass } from "..";
import { Popover, PopoverTrigger } from "../../ui/popover";
import Icon from "../../icon";
import Popovers from "../../popover";

export default function Textarea(props: {
  onChange: (e: string) => void;
  onSubtextChange?: (e: number) => void;
  value?: string;
  label: string;
  subLabel?: string;
  placeholder: string;
  lengthValue?: number;
  onDelete?: () => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [valueState, setValueState] = useState(props.lengthValue);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    props.onChange(value);
    adjustTextareaHeight();
  };

  const handleSubtextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setValueState(value);
    if (props.onSubtextChange) {
      props.onSubtextChange(value);
    }
  };

  const handleDelete = () => {
    if (props.onDelete) props.onDelete();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "44px";
      const scrollHeight = textarea.scrollHeight > 60 ? textarea.scrollHeight : 44;
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(scrollHeight, 200)}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [props.value]);

  return (
    <label htmlFor={props.placeholder} className="flex flex-col gap-1 w-full">
      <div className="text-body-16 font-regular text-gray-900">{props.label}</div>
      {props.subLabel && <div className="text-caption-12 font-regular text-gray-900">{props.subLabel}</div>}
      <textarea
        ref={textareaRef}
        onChange={handleChange}
        placeholder={props.placeholder}
        value={props?.value}
        name={props.placeholder}
        className={inputBaseClass}
      />
      {props.onSubtextChange && (
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-body-14 font-regular text-gray-500">글자 수</div>
            <div className="flex flex-col w-[86px]">
              <input
                type="number"
                value={props.lengthValue}
                className={`${
                  valueState === 0 || !valueState ? "text-gray-200" : "text-gray-900"
                } text-body-12 font-medium bg-transparent placeholder:text-gray-200 outline-none text-center border border-gray-200 focus:border-gray-400 rounded w-[86px]`}
                onChange={handleSubtextChange}
                placeholder="0"
              />
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <button>
                <Icon.Trash />
              </button>
            </PopoverTrigger>
            <Popovers.Danger text="삭제하기" onClick={handleDelete} />
          </Popover>
        </div>
      )}
    </label>
  );
}
