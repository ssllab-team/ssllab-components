import { DAO } from "@/data/daos/dao";
import { PopoverContent } from "../ui/popover";
import ProfileCard from "../profile_card";
import Icon from "../icon";
import TextButton from "./text_button";

export default function ProfilePopover(props: {
  profile?: DAO<"PROFILE">;
  logOut: () => void;
  toCredit?: () => void;
  toPaymentHistory?: () => void;
  onEdit?: () => void;
}) {
  return (
    <PopoverContent
      className="w-[240px] mr-10 rounded-2xl bg-gray-0 border border-[0.4px] border-sub-beige p-4 flex flex-col gap-2"
      style={{ boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.06)" }}
    >
      <ProfileCard
        nickname={props.profile?.nickname}
        phoneNum={props.profile?.phone_num || undefined}
        onEdit={props.onEdit}
      />
      <div className="px-1 flex flex-col gap-2">
        <div
          className="w-full h-12 px-2 flex items-center gap-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 select-none cursor-pointer"
          onClick={props.toCredit}
        >
          <Icon.Credit size={16} />
          <div className="text-body-14 font-regular text-gray-900">크레딧 · 결제</div>
        </div>
        <hr className="border-t border-beige" />
        <div
          className="w-full h-12 px-2 flex items-center gap-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 select-none cursor-pointer"
          onClick={props.toPaymentHistory}
        >
          <Icon.Docs />
          <div className="text-body-14 font-regular text-gray-900">결제내역 · 환불</div>
        </div>
        <hr className="border-t border-beige" />
        <div className="w-full flex justify-end">
          <TextButton text="로그아웃" onClick={props.logOut} variant="bright" />
        </div>
      </div>
    </PopoverContent>
  );
}
