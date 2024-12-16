import { gray } from "..";

const XSpecifications = {
  18: {
    viewBox: "0 0 20 20",
    strokeWidth: "1.4"
  },
  16: {
    viewBox: "0 0 18 18",
    strokeWidth: "1.4"
  },
  14: {
    viewBox: "0 0 16 16",
    strokeWidth: "1.6"
  },
  12: {
    viewBox: "0 0 14 14",
    strokeWidth: "1.8"
  }
};

export function X(props: { size: keyof typeof XSpecifications; color: keyof typeof gray }) {
  const finalColor = gray[props.color];
  const { viewBox, strokeWidth } = XSpecifications[props.size];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox={viewBox} fill="none">
      <path
        d={`M${props.size + 1} 1L1 ${props.size + 1}`}
        stroke={finalColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`M1 1L${props.size + 1} ${props.size + 1}`}
        stroke={finalColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
