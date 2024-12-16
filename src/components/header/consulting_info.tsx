"use client";

import FetchConsultingUseCase from "@/application/use_cases/fetch_consulting_use_case";
import { DAO } from "@/data/daos/dao";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type ConsultingAndJobPosting = DAO<"CONSULTING"> & DAO<"JOB_POSTING">;

export default function ConsultingInfo() {
  const searchParams = useSearchParams();
  const consultingID = searchParams.get("consulting_id");

  const [consultingData, setConsultingData] = useState<DAO<"CONSULTING"> & DAO<"JOB_POSTING">>();

  const fetchConsultingData = async () => {
    if (consultingID === "default" || !consultingID) return;
    const consultingsRes = await FetchConsultingUseCase.readConsultingPreview({ consultingID });
    const consultings = consultingsRes.payload as ConsultingAndJobPosting;
    setConsultingData(consultings);
  };

  useEffect(() => {
    fetchConsultingData();
  }, []);

  return (
    <div className="flex flex-col items-center text-center text-gray-900">
      <div className="text-body-18 font-medium">{consultingData?.company}</div>
      <div className="text-caption-10 font-light">{consultingData?.position}</div>
    </div>
  );
}
