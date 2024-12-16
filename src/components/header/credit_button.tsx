export default function CreditBox(props: { credit: number; onClick?: () => void }) {
  return (
    <form action={props.onClick}>
      <button className="px-2 py-1 rounded-lg border border-gray-400 h-fit text-body-14 font-medium text-navy-hovered hover:bg-gray-100 active:bg-gray-200 duration-200">
        {props.credit} credit
      </button>
    </form>
  );
}
