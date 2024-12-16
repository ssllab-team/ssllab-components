import { ChangeEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../../button";
import Icon from "../../icon";

export default function Message(props: {
  onSend?: (e: string) => void;
  placeholder?: string;
  disabled?: boolean;
  max?: number;
  loading: boolean;
}) {
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSend = () => {
    props.onSend && props.onSend(message);
    setMessage("");
  };

  return (
    <div
      className="w-full p-2 pl-4 bg-gray-0 rounded-xl flex gap-4 transition-all duration-200"
      style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.06)" }}
    >
      <TextareaAutosize
        value={message}
        onChange={handleChange}
        placeholder={props.placeholder}
        name={props.placeholder}
        disabled={props.disabled}
        maxLength={props.max}
        minRows={1}
        maxRows={8}
        className="w-full placeholder:gray-400 text-body-14 font-regular outline-none resize-none mt-[5px] disabled:cursor-not-allowed disabled:bg-gray-0 disabled:placeholder-gray-400"
      />
      <Button
        size="icon_only"
        variant="primary"
        loading={props.loading}
        disabled={(!message && props.disabled) || props.loading}
        icons={
          !props.loading
            ? {
                leading: <Icon.Arrow direction="up" size={14} color="0" />
              }
            : undefined
        }
        onClick={handleSend}
      />
    </div>
  );
}
