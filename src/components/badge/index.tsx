export default function Badge(props: { text: string; status: keyof typeof colors; onClick?: () => void }) {
  const colors = {
    enabled: "bg-gray-100 text-gray-600 hover:text-gray-900 cursor-pointer",
    completed: "bg-gray-300 text-gray-0 cursor-not-allowed",
    expired: "bg-gray-100 text-error-red cursor-not-allowed"
  };
  return (
    <div
      className={
        "rounded-full px-2 py-1 w-fit duration-200 select-none text-caption-12 font-regular " + colors[props.status]
      }
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
}
