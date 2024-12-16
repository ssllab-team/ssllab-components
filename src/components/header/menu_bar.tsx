"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Icon from "../icon";
import FetchConsultingUseCase from "@/application/use_cases/fetch_consulting_use_case";
import { ConsultingAndJobPosting } from "./consulting_info";
import MyPageSideBar from "@/app/(pages)/my-page/_components/my_page_side_bar";
import { DAO } from "@/data/daos/dao";
import FetchMyDataUseCase from "@/application/use_cases/fetch_my_data_use_case";

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState<DAO<"PROFILE"> | null>(null);
  const toggleOpen = () => setIsOpen(!isOpen);

  const getProfile = async () => {
    if (path !== "my-page") return;
    const res = await FetchMyDataUseCase.fetchMyProfile();
    if (!res.success) return;
    setProfile(res.payload as DAO<"PROFILE">);
  };

  const pathname = usePathname();
  const params = new URLSearchParams(location.search);
  const tab = params.get("tab") as "credit" | "payment_history";
  const availablePaths = ["job-posting", "application", "my-page"];
  const path = availablePaths.find((path) => pathname.includes(path)) || "consulting";
  const router = useRouter();

  const to = {
    consulting: () => router.push("/"),
    jobPosting: () => router.push("/job-posting"),
    createJobPosting: () => router.push("/job-posting/create"),
    application: () => router.push("/application")
  };

  const [consultingList, setConsultingList] = useState<ConsultingAndJobPosting[]>([]);
  const getConsultingList = async () => {
    const consultingsRes = await FetchConsultingUseCase.readConsultingPreview({});
    const consultings = consultingsRes.payload as ConsultingAndJobPosting[];
    if (!consultings || !consultingsRes.success) return;
    const defaultOption = {
      company: "쓸랩",
      position: "",
      status: "ready",
      created_at: "",
      creator_id: "",
      id: "",
      job_posting_id: ""
    } as ConsultingAndJobPosting;
    consultings.push(defaultOption);
    setConsultingList(consultings);
  };

  useEffect(() => {
    getConsultingList();
    getProfile();
  }, []);

  const toConsultingRoom = (id: string) => {
    router.push(`/?consulting_id=${id}&room_no=0`);
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={toggleOpen} className="select-none">
        <Icon.Miscellaneous.Hamburger />
      </div>
      {isOpen && (
        <div className="fixed top-[60px] inset-0 p-5 bg-gray-0 flex flex-col gap-2" style={{ zIndex: 9999 }}>
          <div className="rounded-xl border border-gray-100 px-10 py-5 flex justify-between">
            <button
              onClick={to.jobPosting}
              className={`text-body-18 font-medium ${
                path === "job-posting" ? "text-main-navy" : "text-gray-300"
              } text-center`}
            >
              채용공고
            </button>
            <button
              onClick={to.consulting}
              className={`text-body-18 font-medium ${
                path === "consulting" ? "text-main-navy" : "text-gray-300"
              } text-center`}
            >
              컨설팅
            </button>
            <button
              onClick={to.application}
              className={`text-body-18 font-medium ${
                path === "application" ? "text-main-navy" : "text-gray-300"
              } text-center`}
            >
              자소서
            </button>
          </div>
          {profile ? (
            <MyPageSideBar profile={profile} tab={tab} overrideDisplay />
          ) : (
            <div className="pt-4 flex flex-col gap-2 w-full h-full">
              <div className="w-full flex justify-between items-center">
                <div className="text-body-16 font-medium text-gray-900">진행 중인 컨설팅</div>
                <div className="p-1 rounded active:bg-gray-100" onClick={to.createJobPosting}>
                  <Icon.Plus color="500" size={16} />
                </div>
              </div>
              <hr className="border-t border-navy-disabled" />
              <div className="relative flex-grow">
                <div className="flex flex-col gap-1 absolute w-full h-full overflow-scroll">
                  {consultingList?.map((consulting, index) => (
                    <ConsultingItem
                      key={index}
                      company={consulting.company}
                      position={consulting.position}
                      onClick={() => toConsultingRoom(consulting.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

function ConsultingItem(props: { company: string; position: string; onClick: () => void }) {
  return (
    <div className="p-4 flex items-center gap-4 text-main-navy" onClick={props.onClick}>
      <div className="text-body-14 font-medium">{props.company}</div>
      <div className="text-caption-10 font-light">{props.position}</div>
    </div>
  );
}
