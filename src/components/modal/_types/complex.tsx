"use client";

import Button from "@/components/button";
import Icon from "@/components/icon";
import React, { ReactNode, useEffect, useState } from "react";

export default function Complex(props: {
  contents: {
    title?: string | ReactNode;
    subtitle?: string;
    body: ReactNode;
  };
  open?: boolean;
  onClose?: () => void;
  buttons?: {
    back?: {
      onClick: () => void;
      text: string;
    };
    prev?: {
      onClick: () => void;
      text: string;
    };
    next?: {
      onClick: () => void;
      text: string;
    };
  };
  className?: {
    paper?: string;
    contents?: string;
  };
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (props.open) {
      setIsAnimating(true);
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [props.open]);

  return (
    <div
      className={`fixed w-screen h-screen inset-0 bg-gray-900 bg-opacity-30 transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: 9999 }}
      onClick={props.onClose}
    >
      <div
        className={`
                    fixed mt-40 left-1/2 transform -translate-x-1/2
                    bg-gray-0 w-fit md:px-10 md:py-8 px-5 py-8 rounded-tl-xl rounded-tr-xl md:rounded-xl
                    flex flex-col gap-6 no-scrollbar
                    transition-all duration-1000 ease-in-out
                    md:min-w-[475px] max-w-[708px] w-full h-full bottom-0 ${
                      props.className?.paper
                    } max-h-[calc(100vh-100px)]
                    ${isVisible ? "md:bottom-1/2 md:translate-y-1/2" : "md:bottom-0 md:translate-y-full"}
                `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col w-full h-full">
          <div className="w-full h-full flex flex-col gap-5">
            <div className="flex flex-col items-center gap-4">
              <div className="w-full flex justify-between">
                <div className="text-subheadline-24 font-semibold text-gray-900" style={{ whiteSpace: "break-spaces" }}>
                  {props.contents.title}
                </div>
                <div
                  className="w-6 h-6 grid place-items-center rounded-lg hover:bg-gray-100 duration-200"
                  onClick={props.onClose}
                >
                  <Icon.X size={14} color="500" />
                </div>
              </div>
              {props.contents.subtitle && (
                <div className="text-body-14 font-regular text-gray-900">{props.contents.subtitle}</div>
              )}
            </div>
            <div className="relative w-full h-full">
              <div className={`absolute w-full h-full overflow-scroll ${props.className?.contents}`}>
                {props.contents.body}
              </div>
            </div>
          </div>
        </div>
        {props.buttons && (
          <div className="sticky flex gap-2 w-full justify-end">
            {props.buttons && props.buttons.back && (
              <div
                onClick={props.buttons.back.onClick}
                className="text-caption-12 font-medium text-gray-500 hover:underline"
              >
                {props.buttons.back.text}
              </div>
            )}
            {props.buttons && props.buttons.prev && (
              <Button onClick={props.buttons.prev.onClick} variant="secondary" size="large">
                {props.buttons.prev.text}
              </Button>
            )}
            {props.buttons && props.buttons.next && (
              <Button onClick={props.buttons.next.onClick} variant="primary" size="large">
                {props.buttons.next.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
