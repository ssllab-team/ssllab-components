import { gray } from "..";

const ChevronSpecifications = {
  20: {
    width: 20,
    height: 12,
    viewBox: "0 0 20 12",
    strokeWidth: "1.4",
    paths: ["M1 1.5L10 10.5L19 1.5"]
  },
  18: {
    width: 18,
    height: 10,
    viewBox: "0 0 18 10",
    strokeWidth: "1.4",
    paths: ["M1 1L9 9L17 1"]
  },
  16: {
    width: 16,
    height: 10,
    viewBox: "0 0 16 10",
    strokeWidth: "1.6",
    paths: ["M1 1.5L8 8.5L15 1.5"]
  },
  14: {
    width: 14,
    height: 8,
    viewBox: "0 0 14 8",
    strokeWidth: "1.8",
    paths: ["M1 1L7 7L13 1"]
  }
};

export function Chevron(props: {
  size: keyof typeof ChevronSpecifications;
  color: keyof typeof gray | "navy";
  direction: "up" | "down" | "left" | "right";
}) {
  const finalColor = props.color === "navy" ? "#071A3A" : gray[props.color];
  const { width, height, viewBox, strokeWidth, paths } = ChevronSpecifications[props.size];

  return (
    <div
      style={{
        transform: `rotate(${
          props.direction === "up"
            ? "180deg"
            : props.direction === "left"
            ? "90deg"
            : props.direction === "right"
            ? "-90deg"
            : "0deg"
        })`
      }}
    >
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
    </div>
  );
}
