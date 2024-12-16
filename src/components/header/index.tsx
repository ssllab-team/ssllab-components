import SegmentedControl from "./segmented_control";
import AuthCTA from "./auth_cta";
import { redirect } from "next/navigation";
import MenuBar from "./menu_bar";
import ConsultingInfo from "./consulting_info";
import Icon from "../icon";
import CreditBox from "./credit_button";
import FetchMyDataUseCase from "@/application/use_cases/fetch_my_data_use_case";
import { DAO } from "@/data/daos/dao";

export default async function Header() {
  const profileRes = await FetchMyDataUseCase.fetchMyProfile();
  const isLoggedIn = profileRes.success;
  const profile = profileRes?.payload as DAO<"PROFILE">;

  const toMyPage = async () => {
    "use server";
    redirect("/my-page");
  };

  return (
    <>
      <header className="hidden md:block px-10 flex flex-col w-full">
        <div className="w-full flex justify-between border-b-[0.4px] border-beige py-4 items-center">
          <form className="flex items-center">
            <button type="submit" formAction="/">
              <Icon.Logo size={20} color="navy" />
            </button>
          </form>
          <div className="flex gap-10 items-center">
            <SegmentedControl />
            <div className="w-[1.2px] h-[32.5px] bg-gray-200" />
            <div className="flex gap-6 items-center">
              {isLoggedIn && <CreditBox credit={profile?.credit || 0} onClick={toMyPage} />}
              <AuthCTA loggedIn={isLoggedIn} profile={profile} />
            </div>
          </div>
        </div>
      </header>
      <header className="block md:hidden px-5 py-3 flex flex-col w-full">
        <div className="w-full flex items-center justify-between">
          <MenuBar />
          <ConsultingInfo />
          <div className="flex items-center gap-4">
            {isLoggedIn && <CreditBox credit={profile?.credit || 0} onClick={toMyPage} />}
            <AuthCTA loggedIn={isLoggedIn} profile={profile} />
          </div>
        </div>
        <div className="mt-[14px] h-[0.4px] bg-beige w-full" />
      </header>
    </>
  );
}
