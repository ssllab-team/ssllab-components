import { gray } from "..";

const MagnifierSpecifications = {
  20: {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    strokeWidth: "1.4",
    paths: [
      "M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z",
      "M19 18.9999L14.65 14.6499"
    ]
  },
  18: {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    strokeWidth: "1.4",
    paths: [
      "M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z",
      "M17 17L13.1333 13.1333"
    ]
  },
  16: {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    strokeWidth: "1.6",
    paths: [
      "M7.22222 13.4444C10.6587 13.4444 13.4444 10.6587 13.4444 7.22222C13.4444 3.78578 10.6587 1 7.22222 1C3.78578 1 1 3.78578 1 7.22222C1 10.6587 3.78578 13.4444 7.22222 13.4444Z",
      "M15 15L11.6166 11.6167"
    ]
  },
  14: {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    strokeWidth: "1.8",
    paths: [
      "M6.33333 11.6667C9.27885 11.6667 11.6667 9.27885 11.6667 6.33333C11.6667 3.38782 9.27885 1 6.33333 1C3.38782 1 1 3.38782 1 6.33333C1 9.27885 3.38782 11.6667 6.33333 11.6667Z",
      "M13 12.9999L10.1 10.0999"
    ]
  }
};

export function Magnifier(props: { size: keyof typeof MagnifierSpecifications; color: keyof typeof gray }) {
  const finalColor = gray[props.color];
  const { width, height, viewBox, strokeWidth, paths } = MagnifierSpecifications[props.size];

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
