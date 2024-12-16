"use client";

import { DAO } from "@/data/daos/dao";
import Modal from "../modal";
import Input from "../input";
import ProfileCard from "../profile_card";
import ManageMyDataUseCase from "@/application/use_cases/manage_my_data_use_case";
import { useState } from "react";
import Toast from "../toast";
import Icon from "../icon";

export default function ModifyNameModal(props: {
  modal: boolean;
  setModal: (value: boolean) => void;
  profile?: DAO<"PROFILE">;
  onChangeConfirm?: (newName: string) => void;
}) {
  const [newName, setNewName] = useState("");
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [toast, setToast] = useState(false);

  const openConfirmationModal = () => {
    props.setModal(false);
    setConfirmationModal(true);
  };

  const modifyName = async () => {
    ManageMyDataUseCase.modifyProfile({ newName });
    setConfirmationModal(false);
    props.onChangeConfirm && props.onChangeConfirm(newName);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 4000);
    setTimeout(() => {
      setNewName("");
    }, 500);
  };

  return (
    <>
      <Modal.Complex
        open={props.modal}
        onClose={() => props.setModal(false)}
        contents={{
          title: "닉네임 수정",
          body: (
            <Input.Text
              defaultValue={props.profile?.nickname}
              label="닉네임"
              placeholder="수정할 닉네임을 입력해주세요"
              onChange={(e) => setNewName(e)}
            />
          )
        }}
        buttons={{
          next: {
            text: "수정하기",
            onClick: openConfirmationModal
          }
        }}
        className={{
          paper: "!h-[300px] !max-w-[514px]",
          contents: "!overflow-hidden"
        }}
      />
      {toast && <Toast message="닉네임 수정 완료!" variant="success" icon={<Icon.Miscellaneous.PenDraw />} />}
      <Modal.Complex
        open={confirmationModal}
        onClose={() => setConfirmationModal(false)}
        contents={{
          title: "아래 정보로 수정하시겠습니까?",
          body: <ProfileCard nickname={newName} phoneNum={props.profile?.phone_num || undefined} />
        }}
        buttons={{
          next: {
            text: "수정하기",
            onClick: modifyName
          },
          prev: {
            text: "취소하기",
            onClick: () => setConfirmationModal(false)
          }
        }}
        className={{
          paper: "!h-[300px] md:!max-w-[514px]"
        }}
      />
    </>
  );
}
