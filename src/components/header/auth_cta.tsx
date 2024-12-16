"use client";

import { useRouter } from "next/navigation";
import Button from "../button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { DAO } from "@/data/daos/dao";
import Icon from "../icon";
import ProfilePopover from "./profile_popover";
import AuthenticateUseCase from "@/application/use_cases/authenticate_use_case";
import ModifyNameModal from "../modify_name_modal";

export default function AuthCTA(props: { loggedIn: boolean; profile: DAO<"PROFILE"> }) {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const toLogIn = () => router.push("/log-in");
  const toCredit = () => router.push("/my-page?tab=credit");
  const toPaymentHistory = () => router.push("/my-page?tab=payment_history");
  const logOut = async () => {
    await AuthenticateUseCase.signOut();
    window.location.reload();
  };

  return (
    <>
      {props.loggedIn ? (
        <Popover>
          <PopoverTrigger asChild>
            <div className="grid place-items-center bg-sub-beige w-8 h-8 md:w-10 md:h-10 rounded-full">
              <Icon.Miscellaneous.User />
            </div>
          </PopoverTrigger>
          <ProfilePopover
            profile={props.profile}
            logOut={logOut}
            toCredit={toCredit}
            toPaymentHistory={toPaymentHistory}
            onEdit={() => setModal(true)}
          />
        </Popover>
      ) : (
        <Button variant="primary" size="small" onClick={toLogIn}>
          로그인
        </Button>
      )}
      <ModifyNameModal
        {...{
          modal,
          setModal,
          profile: props.profile
        }}
      />
    </>
  );
}
