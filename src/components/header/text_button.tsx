export default function TextButton(props: { text: string; onClick: () => void; variant: "bright" | "dark" }) {
  const classes = {
    bright: "text-gray-500 hover:text-gray-700",
    dark: "text-gray-0 hover:text-gray-200"
  };
  const finalClass = classes[props.variant];
  return (
    <div
      className={"px-2 py-1 text-body-14 font-regular cursor-pointer duration-200 " + finalClass}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
}
