import { ChangeEvent, useEffect, useState } from "react";
import { inputBaseClass } from "..";
import Icon from "../../icon";

export default function Text(props: {
  onChange?: (e: string) => void;
  value?: string;
  label: string;
  placeholder?: string;
  name?: string;
  defaultValue?: string;
  message?: {
    text?: string;
    type: "success" | "timer" | "action";
    actionClick?: () => void;
    disabled?: boolean;
    errorText?: string;
    resetTimer?: number;
  };
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (props.onChange) props.onChange(value);
  };

  const Items = {
    success: <Success text={props.message?.text ? props.message?.text : ""} />,
    timer: <Timer onClick={props.message?.actionClick} resetTick={props.message?.resetTimer} />,
    action: (
      <Action
        text={props.message?.text ? props.message?.text : ""}
        disabled={props.message?.disabled}
        onClick={props.message?.actionClick}
      />
    )
  };

  return (
    <label htmlFor={props.placeholder} className="flex flex-col gap-1 w-full md:min-w-[304px]">
      <div className="text-body-16 font-regular text-gray-900">{props.label}</div>
      <div className={inputBaseClass + " flex gap-2"}>
        <input
          onChange={handleChange}
          placeholder={props.placeholder}
          value={props?.value}
          name={props.name}
          className="w-full outline-none placeholder:text-body-16 font-regular"
          defaultValue={props.defaultValue}
        />
        {props.message?.type && Items[props.message?.type]}
      </div>
      {props.message?.errorText && (
        <div className="text-caption-12 font-medium text-error-red px-2 py-1 flex-shrink-0 select-none">
          {props.message.errorText}
        </div>
      )}
    </label>
  );
}

function Timer(props: { onClick?: () => void; resetTick?: number }) {
  const [time, setTime] = useState(180);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev - 1 > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTime(180);
  }, [props.resetTick]);

  return (
    <div className="flex items-center gap-1 flex-shrink-0">
      <div className="text-caption-12 font-medium text-sub-blue">
        {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
      </div>
      <div
        className="px-2 py-1 text-caption-12 font-medium text-gray-700 active:bg-gray-100 rounded select-none"
        onClick={props.onClick}
      >
        확인
      </div>
    </div>
  );
}

function Success(props: { text: string }) {
  return (
    <div className="flex items-center gap-1 p-1 flex-shrink-0">
      <div className="w-6 h-6 grid place-items-center">
        <Icon.Check size={14} color="navy" />
      </div>
      <div className="text-caption-14 font-medium text-main-navy select-none">{props.text}</div>
    </div>
  );
}

function Action(props: { text: string; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      disabled={props.disabled}
      className="text-caption-12 font-medium disabled:text-gray-500 text-gray-700 px-2 py-1 flex-shrink-0 select-none active:bg-gray-100 rounded duration-200"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
