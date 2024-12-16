import Button from "@/components/button";
import { ReactNode, useState } from "react";

export default function LoadingButton(props: {
  variant: "primary" | "secondary" | "tertiary" | "text_main" | "text_sub" | "add";
  size: "icon_only" | "small" | "medium" | "large" | "text" | "add";
  children?: string;
  icons?: {
    leading?: ReactNode;
    trailing?: ReactNode;
  };
  onClick?: () => void;
}) {
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
