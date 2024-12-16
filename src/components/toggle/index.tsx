export default function Toggle(props: { text: string; onClick?: () => void; selected?: boolean }) {
  const classes = {
    selected: "text-gray-0 bg-main-brown",
    unChecked: "text-main-brown bg-sub-beige"
  };
  const finalClasses = props.selected ? classes.selected : classes.unChecked;
  return (
    <div
      className={
        "rounded-full px-4 py-2 text-button-16 font-medium select-none w-fit hover:bg-beige-hovered hover:text-main-brown duration-200 " +
        finalClasses
      }
      onClick={props.onClick}
    >
      <div>{props.text}</div>
    </div>
  );
}
