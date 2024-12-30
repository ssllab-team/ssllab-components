import { ReactNode } from "react";

const classes = {
  variant: {
    primary: " bg-main-navy hover:bg-navy-hovered disabled:bg-navy-disabled text-gray-0 ",
    secondary: " bg-beige text-gray-0 hover:bg-beige-hovered ",
    tertiary: " bg-gray-0 hover:bg-gray-100 ",
    text_main: " text-button-14 font-medium text-main-navy hover:underline ",
    text_sub: " text-caption-12 font-medium text-gray-500 hover:underline ",
    add: " text-button-14 font-medium text-main-brown flex items-center gap-2 p-1 hover:opacity-50 rounded "
  },
  size: {
    small: " text-button-14 font-medium h-8 px-6 h-9 rounded-xl ",
    medium: " text-button-14 md:text-button-16 font-medium px-6 h-10 rounded-xl ",
    large:
      " text-button-14 md:text-button-16 md:text-button-18 font-medium px-6 h-10 md:h-11 rounded-xl w-full md:w-fit ",
    xlarge: " px-7 py-[10px] rounded-[16px] !gap-3 text-subheadline-24 font-semibold ",
    icon_only: " h-8 min-w-8 w-fit grid place-items-center rounded-lg ",
    text: " py-1 px-2 ",
    add: " "
  },
  default:
    " cursor-pointer select-none text-center duration-200 disabled:cursor-not-allowed flex items-center justify-center gap-2 flex-shrink-0 "
};

export interface ButtonProps {
  variant: keyof typeof classes.variant;
  size: keyof typeof classes.size;
  children?: string;
  onClick?: () => void;
  disabled?: boolean;
  icons?: {
    leading?: ReactNode;
    trailing?: ReactNode;
  };
  loading?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={classes.default + classes.variant[props.variant] + classes.size[props.size]}
      disabled={props.disabled || props.loading}
      onClick={props.onClick ? props.onClick : undefined}
      type="submit"
    >
      {props.icons?.leading && <div className="flex-shrink-0">{props.icons.leading}</div>}
      {props.loading && <Spinner />}
      {props.children && <div className="flex-shrink-0">{props.children}</div>}
      {props.icons?.trailing && <div className="flex-shrink-0">{props.icons.trailing}</div>}
    </button>
  );
}

function Spinner() {
  return <div className="w-[18px] h-[18px] border-2 border-t-sub-blue border-gray-0 rounded-full animate-spin" />;
}
