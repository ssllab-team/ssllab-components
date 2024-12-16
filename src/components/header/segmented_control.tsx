"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "../modal";
import { createClient } from "@/data/infrastructures/supabase/client";

export default function SegmentedControl() {
  const pathname = usePathname();

  const namedRoutes = {
    "/job-posting": 0,
    "/application": 2,
    "/my-page": null,
    "/": 1
  };

  const routeIndex = (Object.keys(namedRoutes).find((key) => {
    return pathname.startsWith(key);
  }) ?? "/") as keyof typeof namedRoutes;

  const [selected, setSelected] = useState<null | number>(namedRoutes[routeIndex]);
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const getRouteUsingIndex = (index: number) => {
    switch (index) {
      case 0:
        return "/job-posting";
      case 1:
        return "/";
      case 2:
        return "/application";
      default:
        return "/";
    }
  };

  const items = ["채용공고", "컨설팅", "자소서"];
  const onClick = async (index: number) => {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    const userData = user.data.user;
    if (!userData) {
      setModal(true);
      return;
    }
    setSelected(index);
    router.push(getRouteUsingIndex(index));
  };

  return (
    <>
      <div className="select-none">
        <div className="flex gap-6 items-center">
          {items.map((item, index) => (
            <HeaderItem key={index} label={item} onClick={() => onClick(index)} selected={selected === index} />
          ))}
        </div>
      </div>

      <Modal.Simple
        title="채용공고를 보려면 로그인이 필요해요."
        open={modal}
        onClose={() => setModal(false)}
        buttons={{
          back: {
            onClick: () => setModal(false),
            text: "돌아가기"
          },
          next: {
            onClick: () => router.push("/log-in"),
            text: "로그인"
          }
        }}
      />
    </>
  );
}

function HeaderItem(props: { label: string; onClick?: () => void; selected: boolean }) {
  return (
    <div
      className={`text-body-18 ${
        props.selected ? "font-medium text-main-navy" : "font-regular text-gray-300"
      } cursor-pointer`}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
}
