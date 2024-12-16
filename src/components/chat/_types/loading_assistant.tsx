import LoadingKebab from "./loading_kebab";

export default function LoadingAssistant() {
  return (
    <div className="flex flex-col gap-2 max-w-[548px] w-fit md:w-full md:p-0 mr-3 md:mr-10">
      <div className="flex flex-col gap-1 w-full">
        <div className="pl-5 text-body-14 font-medium text-gray-800">쓸랩</div>
        <div
          className="w-full p-4 md:px-5 md:py-4 rounded-xl rounded-bl-none bg-gray-0 border border-gray-100 flex flex-col gap-6 text-body-14 font-regular text-gray-900"
          style={{
            boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.04)",
            whiteSpace: "break-spaces"
          }}
        >
          <LoadingKebab />
        </div>
      </div>
    </div>
  );
}
