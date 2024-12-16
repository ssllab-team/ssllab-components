"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/button";
import Icon from "@/components/icon";

export default function File(props: { onChange?: (files: File[]) => void }) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileData, setFileData] = useState<File[]>([]);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      const allowedExtensions = ["image/jpeg", "image/png", "image/webp"];
      const filteredFiles = fileArray.filter((file) => allowedExtensions.includes(file.type));
      const newFileArray = fileData.concat(filteredFiles);
      setFileData(newFileArray);
      props.onChange && props.onChange(newFileArray);
    }
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }
    setIsDragging(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);

      const allowedExtensions = ["image/jpeg", "image/png", "image/webp"];
      const filteredFiles = fileArray.filter((file) => allowedExtensions.includes(file.type));

      const newFileArray = fileData.concat(filteredFiles);
      setFileData(newFileArray);
      props.onChange && props.onChange(newFileArray);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...fileData];
    newFiles.splice(index, 1);
    setFileData(newFiles);
    if (props.onChange) props.onChange(newFiles);
  };

  return (
    <div className="flex flex-col gap-5 flex-grow">
      <div className="flex flex-col">
        <div className="text-body-18 font-medium text-gray-900">채용공고 파일을 첨부해주세요</div>
        <div className="text-caption-10 font-light text-gray-600">jpg, jpeg, png, webp 파일만 가능</div>
      </div>
      <div className="flex flex-col gap-5 h-full">
        <div
          className={`flex flex-col items-center gap-4 py-8 px-6 rounded-xl border border-main-brown bg-base duration-200 ${
            isDragging ? "bg-sub-beige" : ""
          }`}
          onDragOver={handleDragOver}
          onDrop={handleFileDrop}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
          <div className="flex flex-col items-center gap-1">
            <Icon.Miscellaneous.Upload />
            <div className="text-body-16 font-regular text-main-brown">클릭하거나 파일을 드래그해주세요</div>
          </div>
          <Button size="small" variant="primary" onClick={handleFileClick}>
            업로드하기
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            multiple
            accept=".jpg,.png,.webp,.jpeg"
          />
        </div>
        <div className="flex-grow h-full relative">
          <div className="flex flex-col gap-2 absolute w-full h-fit md:h-full pb-[72px] overflow-scroll no-scrollbar">
            {fileData.map((file, index) => (
              <div
                key={index}
                className="px-4 py-3 flex items-center justify-between gap-5 w-full bg-gray-0 rounded-lg"
                style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.10)" }}
              >
                <div className="flex flex-col gap-1">
                  <div className="text-body-14 font-medium text-gray-900">{file.name}</div>
                  <div className="text-caption-10 font-light text-700">{Math.round(file.size / 1000)} KB</div>
                </div>
                <div className="flex items-center justify-between w-[98px]">
                  <div className="flex items-center flex-shrink-0 gap-2">
                    <Icon.Check size={14} color="navy" />
                    <div className="text-button-14 font-medium text-main-navy">완료</div>
                  </div>
                  <div onClick={() => removeFile(index)}>
                    <Icon.X size={14} color="500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
