import Icon from "../icon";

export default function Breadcrumb(props: { items: string[]; currentIndex: number }) {
  return (
    <div className="flex items-center gap-2 text-caption-12">
      {props.items.map((item, index) => (
        <>
          <span
            className={`cursor-pointer ${
              props.currentIndex === index ? "font-medium text-main-navy" : "font-regular text-gray-400"
            }`}
          >
            {item}
          </span>
          {index < props.items.length - 1 && <Icon.Chevron direction="right" size={16} color="300" />}
        </>
      ))}
    </div>
  );
}
