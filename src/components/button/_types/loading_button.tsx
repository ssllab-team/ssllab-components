"use client";

import { useState } from "react";
import Button, { ButtonProps } from "..";

export default function LoadingButton(props: ButtonProps) {
  const [loading, setLoading] = useState(false);
  const startLoading = () => {
    setLoading(true);
    props.onClick?.();
  };
  return (
    <Button
      onClick={startLoading}
      size={props.size}
      variant={props.variant}
      icons={props.icons}
      loading={loading}
      disabled={loading}
    >
      {props.children}
    </Button>
  );
}
