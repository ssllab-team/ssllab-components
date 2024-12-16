import { gray } from "..";

const CheckSpecifications = {
  46: {
    width: 46,
    height: 33,
    viewBox: "0 0 46 33",
    strokeWidth: "4.8",
    paths: ["M43 3L15.5 30.5L3 18"]
  },
  20: {
    width: 20,
    height: 15,
    viewBox: "0 0 20 15",
    strokeWidth: "1.4",
    paths: ["M19 1L6.625 13.375L1 7.75"]
  },
  18: {
    width: 18,
    height: 13,
    viewBox: "0 0 18 13",
    strokeWidth: "1.4",
    paths: ["M17 1L6 12L1 7"]
  },
  16: {
    width: 16,
    height: 12,
    viewBox: "0 0 16 12",
    strokeWidth: "1.6",
    paths: ["M15 1L5.375 10.625L1 6.25"]
  },
  14: {
    width: 14,
    height: 11,
    viewBox: "0 0 14 11",
    strokeWidth: "1.8",
    paths: ["M13 1L4.75 9.25L1 5.5"]
  }
};

export function Check(props: { size: keyof typeof CheckSpecifications; color: keyof typeof gray | "navy" }) {
  const finalColor = props.color === "navy" ? "#071A3A" : gray[props.color];
  const { width, height, viewBox, strokeWidth, paths } = CheckSpecifications[props.size];

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill="none">
      {paths.map((d, index) => (
        <path
          key={index}
          d={d}
          stroke={finalColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
