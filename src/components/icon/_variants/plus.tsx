import { gray } from "..";

const PlusSpecifications = {
  20: {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    strokeWidth: "1.4",
    paths: [{ d: "M10 1V19" }, { d: "M1 10H19" }]
  },
  18: {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    strokeWidth: "1.4",
    paths: [{ d: "M9 1V17" }, { d: "M1 9H17" }]
  },
  16: {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    strokeWidth: "1.6",
    paths: [{ d: "M8 1V15" }, { d: "M1 8H15" }]
  },
  14: {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    strokeWidth: "1.8",
    paths: [{ d: "M7 1V13" }, { d: "M1 7H13" }]
  }
};

export function Plus(props: { size: keyof typeof PlusSpecifications; color?: keyof typeof gray }) {
  const { width, height, viewBox, strokeWidth, paths } = PlusSpecifications[props.size];
  const strokeColor = props.color ? gray[props.color] : "#60584F";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill="none">
      {paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
