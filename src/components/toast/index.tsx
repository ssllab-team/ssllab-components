/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ReactNode, useEffect, useState } from "react";

const colors = {
  success: "bg-main-navy",
  error: "bg-error-red"
};

export default function Toast(props: { message: string; icon: ReactNode; variant: keyof typeof colors }) {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  let showTimeout: string | number | NodeJS.Timeout | undefined;
  let hideTimeout: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    setVisible(true);
    showTimeout = setTimeout(() => setAnimate(true), 10);
    hideTimeout = setTimeout(() => {
      setAnimate(false);
      setTimeout(() => setVisible(false), 700);
    }, 4000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    visible && (
      <div
        className={`fixed left-0 w-full transition-all duration-700 ease-in-out flex justify-center ${
          animate ? "top-10 md:top-[112px] opacity-100" : "-top-full opacity-0"
        }`}
        style={{
          zIndex: 9999
        }}
      >
        <div
          className="flex items-center gap-4 px-5 py-3 bg-gray-0 border-[0.8px] border-gray-100 rounded-full w-fit"
          style={{
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.12)"
          }}
        >
          <div className={`w-7 h-7 grid place-items-center ${colors[props.variant]} rounded-full`}>{props.icon}</div>
          <div className="text-body-18 font-medium text-main-navy">{props.message}</div>
        </div>
      </div>
    )
  );
}
