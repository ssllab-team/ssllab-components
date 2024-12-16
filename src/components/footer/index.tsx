import Icon from "../icon";

export default function Footer(props: { toTerms: () => void }) {
  return (
    <div className="flex flex-col gap-5 w-full md:border-t border-main-brown">
      <div className="md:pl-[96px] p-5 pb-8 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Icon.Logo color="brown" size={20} />
            <div className="text-gray-900 text-caption-12 md:text-body-14 font-semibold md:font-medium">쓸랩</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-500 text-caption-10 md:text-caption-12 font-light md:font-regular">
              <div>상호 : 쓸랩</div>
              <div>|</div>
              <div>대표자명 : 윤건재</div>
              <div>|</div>
              <div>대표전화 : 010-3455-5341 (평일 09시-18시)</div>
            </div>
            <div className="text-mobile-8 md:text-caption-10 font-regular md:font-light text-gray-500">
              사업자등록번호 : 614-24-64298
            </div>
            <div className="text-mobile-8 md:text-caption-10 font-regular md:font-light text-gray-500">
              통신판매신고번호 : 614-24-64298
            </div>
            <div className="text-mobile-8 md:text-caption-10 font-regular md:font-light text-gray-500">
              주소 : (32140) 충청남도 태안군 태안읍 샘골로 42, 405호(보령주택3차)
            </div>
            <div className="text-caption-10 font-light text-gray-500">개인정보 담당자 : 윤건재(010-3455-5341)</div>
          </div>
        </div>
        <a
          href="https://fptovmbgnongnwzkdmdj.supabase.co/storage/v1/object/public/homepage_assets/ssllab_terms.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-6 text-gray-500 text-caption-10 md:text-caption-12 font-light md:font-regular"
        >
          개인정보처리방침
        </a>
        <div className="flex items-center gap-6 text-gray-500 text-caption-10 md:text-caption-12 font-light md:font-regular">
          개인정보처리방침
        </div>
      </div>
    </div>
  );
}
