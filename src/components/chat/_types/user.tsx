import { ChangeEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../../button";
import Icon from "../../icon";

export default function User(props: {
  message: string;
  onEdit?: (e: string) => void;
  isLast?: boolean;
  isPrevSelect?: boolean;
  editPrevSelect?: () => void;
}) {
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState(
    props.message.includes("\n")
      ? props.message
          .split("\n")
          .map((chat) => `• ${chat}`)
          .join("\n")
      : props.message
  );

  const onEdit = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSend = () => {
    if (props.onEdit) props.onEdit(message);
    setEdit(false);
  };

  const toEditMode = () => {
    if (props.isPrevSelect && props.editPrevSelect) props.editPrevSelect();
    else setEdit(true);
  };

  return (
    <div
      className="flex justify-end items-end gap-2 self-end ml-3 md:ml-10 w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.isLast ? (
        <div
          className={`${hover || edit ? "opacity-100" : "opacity-0"} transition-all duration-200`}
          onClick={toEditMode}
        >
          {props.isPrevSelect ? (
            <div className="px-2 py-1 text-caption-12 font-medium text-gray-500 flex-shrink-0 cursor-pointer">
              다시 선택하기
            </div>
          ) : (
            <Icon.Miscellaneous.PenDraw />
          )}
        </div>
      ) : null}
      <div
        className="flex flex-col gap-2 max-w-[600px] p-4 md:px-5 md:py-4 rounded-xl rounded-br-none bg-sub-beige border-gray-100 text-body-14 font-regular text-gray-900"
        style={{
          boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.04)",
          whiteSpace: "break-spaces"
        }}
      >
        {edit ? (
          <>
            <TextareaAutosize
              className="outline-none bg-transparent resize-none w-full"
              value={message}
              onChange={onEdit}
            />
            <div className="flex items-center gap-1 w-full justify-end">
              <div
                className="px-2 py-1 text-caption-12 font-medium text-gray-500 cursor-pointer"
                onClick={() => setEdit(false)}
              >
                취소하기
              </div>
              <Button
                size="icon_only"
                variant="primary"
                icons={{
                  leading: <Icon.Arrow direction="up" size={14} color="0" />
                }}
                onClick={handleSend}
              />
            </div>
          </>
        ) : (
          <div>{message}</div>
        )}
      </div>
    </div>
  );
}
