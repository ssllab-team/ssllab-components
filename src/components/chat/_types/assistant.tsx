import Button from "@/components/button";
import Icon from "@/components/icon";
import { useEffect, useState } from "react";

export default function Assistant(props: {
  name: string;
  message?: string;
  button?: { text: string; onClick: () => void };
  popover?: string;
  select?: { options: string[]; onSelect: (selected: string[]) => void; max?: number };
  done?: boolean;
}) {
  const refinedOptions = props.select?.options
    ? props.select.options.map((option) => {
        return { option: option, selected: false };
      })
    : [];
  const [options, setOptions] = useState(refinedOptions);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setOptions(refinedOptions);
  }, [props.select?.options]);

  const selectOption = (index: number) => {
    setOptions(
      options.map((option, i) => {
        if (i === index) {
          if (option.selected) {
            return { ...option, selected: false };
          } else {
            if (props.done) return option;
            const selectedCount = options.filter((option) => option.selected).length;
            if (selectedCount >= (props.select?.max || Infinity)) return option;
            return { ...option, selected: !option.selected };
          }
        } else {
          return option;
        }
      })
    );
  };

  const sendSelectedOptions = () => {
    setLoading(true);
    const selectedOptions = options.filter((option) => option.selected).map((option) => option.option);
    props.select?.onSelect(selectedOptions);
  };

  return (
    <div className="flex flex-col gap-2 md:max-w-[548px] w-full pr-3 md:mr-10">
      <div className="flex flex-col gap-1 w-full">
        <div className="pl-5 text-body-14 font-medium text-gray-800">{props.name}</div>
        <div
          className="w-full p-4 md:px-5 md:py-4 rounded-xl rounded-bl-none bg-gray-0 border border-gray-100 flex flex-col gap-6 text-body-14 font-regular text-gray-900"
          style={{
            boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.04)",
            whiteSpace: "break-spaces"
          }}
        >
          {props.message}
          {props.button && (
            <div className="w-full flex justify-end">
              <button
                className="px-3 py-[6px] bg-beige hover:bg-beige-hovered rounded-lg flex items-center gap-2 duration-200"
                onClick={props.button?.onClick}
              >
                <div className="text-gray-0 text-caption-12 font-medium">{props.button?.text}</div>
                <Icon.Arrow direction="right" size={12} color="0" />
              </button>
            </div>
          )}
        </div>
      </div>
      {props.select && (
        <div className="flex flex-col gap-3 max-w-[400px] select-none">
          <div className="text-body-16 font-regular text-gray-900 pl-5">선택해주세요</div>
          <div className="flex flex-col gap-2 pl-5 md:pl-0">
            {options.map((option, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-lg text-body-14 font-medium text-gray-900 bg-gray-0 cursor-pointer ${
                  option.selected ? "border border-2 border-main-brown" : "border border-2 border-gray-0"
                }`}
                style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.10)" }}
                onClick={() => {
                  selectOption(index);
                }}
              >
                {option.option}
              </div>
            ))}
          </div>
          {!props.done && (
            <div className="w-full flex justify-end">
              <Button
                size="icon_only"
                disabled={options.filter((option) => option.selected).length < (props.select?.max ?? 1) || loading}
                variant="primary"
                loading={loading}
                onClick={sendSelectedOptions}
                icons={!loading ? { leading: <Icon.Arrow direction="up" color="0" size={12} /> } : undefined}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
