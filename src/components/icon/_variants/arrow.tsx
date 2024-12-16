import { gray } from "..";

const ArrowRightSpecifications = {
  20: {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    strokeWidth: "2",
    paths: ["M1 11H21", "M11 1L21 11L11 21"]
  },
  18: {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    strokeWidth: "1.4",
    paths: ["M1 10H19", "M10 1L19 10L10 19"]
  },
  16: {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    strokeWidth: "1.4",
    paths: ["M1 9H17", "M9 1L17 9L9 17"]
  },
  14: {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    strokeWidth: "1.6",
    paths: ["M1 8H15", "M8 1L15 8L8 15"]
  },
  12: {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    strokeWidth: "1.8",
    paths: ["M1 7H13", "M7 1L13 7L7 13"]
  }
};

export function Arrow(props: {
  size: keyof typeof ArrowRightSpecifications;
  color: keyof typeof gray;
  direction: "right" | "up";
}) {
  const finalColor = gray[props.color];
  const { width, height, viewBox, strokeWidth, paths } = ArrowRightSpecifications[props.size];

  return (
    <div style={{ transform: `rotate(${props.direction === "right" ? 0 : 270}deg)` }}>
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
