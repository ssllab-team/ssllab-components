import Icon from "../icon";

export default function ProfileCard(props: { nickname?: string; phoneNum?: string; onEdit?: () => void }) {
  const phoneNum = props.phoneNum
    ? `${props.phoneNum.slice(0, 3)}-${props.phoneNum.slice(3, 7)}-${props.phoneNum.slice(7)}`
    : "";

  return (
    <>
      {props.onEdit ? (
        <div className="px-5 py-2 rounded-xl bg-gray-0 border border-gray-100 w-full flex flex-col gap-1 cursor-pointer select-none">
          <div className="flex justify-between items-center">
            <div className="text-body-14 font-medium text-gray-900">{props.nickname}</div>
            <Icon.Miscellaneous.PenDraw onClick={props.onEdit} />
          </div>
          <div className="text-caption-12 font-regular text-gray-400">{phoneNum}</div>
        </div>
      ) : (
        <div className="w-full p-5 rounded-xl border border-gray-100 bg-gray-0 flex items-center gap-5 cursor-pointer">
          <div className="grid place-items-center bg-sub-beige w-8 h-8 md:w-10 md:h-10 rounded-full">
            <Icon.Miscellaneous.User />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-body-18 font-medium text-gray-900">{props.nickname}</div>
            <div className="text-body-14 font-regular text-gray-600">{phoneNum}</div>
          </div>
        </div>
      )}
    </>
  );
}
