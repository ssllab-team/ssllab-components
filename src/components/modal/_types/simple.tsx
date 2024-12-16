import Button from "@/components/button";
import React, { ReactNode, useEffect, useState } from "react";

export default function Simple(props: {
  title?: string;
  description?: ReactNode | string;
  open?: boolean;
  onClose?: () => void;
  buttons?: {
    back?: {
      onClick: () => void;
      text: string;
    };
    next?: {
      onClick: () => void;
      text: string;
    };
  };
  isDelete?: boolean;
  className?: {
    paper?: string;
    title?: string;
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
      className={`fixed inset-0 bg-gray-900 bg-opacity-30 transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: 9999 }}
      onClick={props.onClose}
    >
      <div
        className={`
                    fixed left-1/2 transform -translate-x-1/2
                    bg-gray-0 w-fit px-8 py-5 rounded-xl
                    flex flex-col gap-7
                    transition-all duration-1000 ease-in-out
                    md:min-w-[475px] md:max-w-[708px] !w-[calc(100%-40px)]
                    ${isVisible ? "bottom-1/2 translate-y-1/2" : "bottom-0 translate-y-full"}
                    ${props.className?.paper}
                `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex flex-col gap-1">
          {props.title && (
            <div
              className={`text-body-14 md:text-body-18 font-medium ${props.className?.title} ${
                props.isDelete ? "text-error-red" : "text-main-navy"
              }`}
            >
              {props.title}
            </div>
          )}
          <div
            className="text-caption-12 font-regular text-main-navy"
            style={{
              whiteSpace: "break-spaces"
            }}
          >
            {props.description}
          </div>
        </div>
        {props.buttons && (
          <div className="flex gap-2 w-full justify-end">
            {props.buttons && props.buttons.back && (
              <Button onClick={props.buttons.back.onClick} variant="secondary" size="small">
                {props.buttons.back.text}
              </Button>
            )}
            {props.buttons && props.buttons.next && (
              <Button onClick={props.buttons.next.onClick} variant="primary" size="small">
                {props.buttons.next.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
