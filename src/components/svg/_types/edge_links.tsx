export default function EdgeLinks(props: { direction: "up" | "down" }) {
  const color = props.direction === "down" ? "#B3B8C1" : "#B5AA9C";
  const rotation = props.direction === "down" ? "rotate-180" : "";

  return (
    <svg
      width="736"
      height="103"
      viewBox="0 0 736 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotation}`}
      style={{ transformOrigin: "center" }}
    >
      <path d="M368 1.5L368 101.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
      <path
        d="M1 2.5V2.5C1 24.3705 18.7295 42.1 40.6 42.1H328C350.091 42.1 368 60.0086 368 82.1V101.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path
        d="M735 2.5V2.5C735 24.3705 717.27 42.1 695.4 42.1H408C385.909 42.1 368 60.0086 368 82.1V101.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
    </svg>
  );
}
