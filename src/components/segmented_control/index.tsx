"use client";

import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import Icon from "../icon";

export default function SegmentedControl(props: {
  items: {
    item: string;
    label: string;
  }[];
  onSelect: (index: number) => void;
  currentIndex: number;
}) {
  const [selected, setSelected] = useState<number>(props.currentIndex);

  const onClick = (index: number) => {
    if (selected === null) return;
    setSelected(index);
    props.onSelect(index);
  };

  const minItems = 4;
  const items = props.items.length < minItems ? minItems : props.items.length;

  const individualWidth = 100 / items;

  return (
    <div className="w-full">
      <div className={`w-full flex border-b border-navy-disabled`} style={{ borderBottomWidth: 0.6 }}>
        {props.items.map((item, index) => {
          return (
            <HeaderItem
              key={index}
              item={item.item}
              label={item.label}
              onClick={() => onClick(index)}
              selected={selected === index}
              width={individualWidth}
            />
          );
        })}
        {props.items.length < minItems &&
          Array(items - props.items.length)
            .fill(0)
            .map((_, index) => {
              return <div key={index} />;
            })}
      </div>
      <hr
        className={`border border-main-navy transition-transform duration-200 transition-linear`}
        style={{
          width: `${individualWidth}%`,
          borderTop: "1px",
          marginTop: "-0.6px",
          transform: `translateX(${selected * 100}%)`
        }}
      />
    </div>
  );
}

function HeaderItem(props: { item: string; label: string; onClick?: () => void; selected: boolean; width: number }) {
  return (
    <div className="flex items-center justify-center gap-3 cursor-pointer" style={{ width: `${props.width}%` }}>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button>
              {props.selected ? (
                <Icon.Miscellaneous.Tooltip color="navy" />
              ) : (
                <Icon.Miscellaneous.Tooltip color="brown" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent className="rounded-xl opacity-80 bg-main-navy px-4 py-2" side="bottom">
            <div className="text-caption-12 font-regular text-gray-0">{props.item}</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div
        onClick={props.onClick}
        className={`text-caption-12 flex flex-col items-center gap-5 cursor-pointer py-2 ${
          props.selected ? "font-semibold text-main-navy" : "font-regular text-navy-disabled"
        }`}
      >
        {props.label}
      </div>
    </div>
  );
}
