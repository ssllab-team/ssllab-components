function GoogleLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <mask
        id="mask0_1521_7498"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path d="M20 0H0V20H20V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1521_7498)">
        <path
          d="M19.6 10.2274C19.6 9.51828 19.5364 8.83648 19.4182 8.18188H10V12.0501H15.3818C15.15 13.3001 14.4455 14.3592 13.3864 15.0683V17.5774H16.6182C18.5091 15.8365 19.6 13.2728 19.6 10.2274Z"
          fill="#4285F4"
        />
        <path
          d="M10 19.9999C12.7 19.9999 14.9636 19.1044 16.6181 17.5772L13.3863 15.0681C12.4909 15.6681 11.3454 16.0226 10 16.0226C7.3954 16.0226 5.1909 14.2635 4.4045 11.8999H1.0636V14.4908C2.7091 17.759 6.0909 19.9999 10 19.9999Z"
          fill="#34A853"
        />
        <path
          d="M4.4045 11.8999C4.2045 11.2999 4.0909 10.659 4.0909 9.99993C4.0909 9.34083 4.2045 8.69993 4.4045 8.09993V5.50903H1.0636C0.3864 6.85903 0 8.38633 0 9.99993C0 11.6135 0.3864 13.1408 1.0636 14.4908L4.4045 11.8999Z"
          fill="#FBBC04"
        />
        <path
          d="M10 3.9773C11.4681 3.9773 12.7863 4.4818 13.8227 5.4727L16.6909 2.6045C14.9591 0.9909 12.6954 0 10 0C6.0909 0 2.7091 2.2409 1.0636 5.5091L4.4045 8.1C5.1909 5.7364 7.3954 3.9773 10 3.9773Z"
          fill="#E94235"
        />
      </g>
    </svg>
  );
}

function Upload() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
      <path
        d="M20.3953 16.3875C21.3707 15.8558 22.1412 15.0144 22.5852 13.9962C23.0292 12.9779 23.1215 11.8408 22.8475 10.7642C22.5735 9.68769 21.9488 8.73305 21.072 8.05099C20.1952 7.36892 19.1162 6.99828 18.0053 6.99754H16.7453C16.4426 5.82678 15.8785 4.73988 15.0953 3.81854C14.3121 2.89719 13.3302 2.16539 12.2234 1.67815C11.1167 1.19091 9.91388 0.960901 8.70545 1.00542C7.49701 1.04995 6.3144 1.36784 5.24651 1.93521C4.17862 2.50257 3.25324 3.30465 2.53995 4.28112C1.82666 5.2576 1.34402 6.38308 1.12831 7.57294C0.912601 8.76279 0.969437 9.98607 1.29454 11.1508C1.61965 12.3155 2.20457 13.3914 3.00533 14.2975M12.001 12.334V21.334M16.0053 16.3341L12.0053 11L8.00534 16.3341"
        stroke="#60584F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Hamburger() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 12H20" stroke="#121212" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6H20" stroke="#121212" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 18H20" stroke="#121212" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Popover() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <g clipPath="url(#clip0_233_325)">
        <path
          d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
          stroke="#121212"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 6V9" stroke="#121212" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12H9.0075" stroke="#121212" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_233_325">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Tooltip(props: { color: "navy" | "brown" | "beige" }) {
  const colors = {
    navy: "#071A3A",
    brown: "#60584F",
    beige: "#B5AA9C"
  };
  const color = colors[props.color];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.8175 6.74994C6.99383 6.24869 7.34187 5.82602 7.79997 5.55679C8.25807 5.28756 8.79668 5.18914 9.32039 5.27897C9.8441 5.3688 10.3191 5.64108 10.6613 6.04758C11.0035 6.45409 11.1908 6.96858 11.19 7.49994C11.19 8.99994 8.94 9.74994 8.94 9.74994"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12.75H9.0075" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function User() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
      <path
        d="M13 14V12.6667C13 11.9594 12.6839 11.2811 12.1213 10.781C11.5587 10.281 10.7956 10 10 10H4C3.20435 10 2.44129 10.281 1.87868 10.781C1.31607 11.2811 1 11.9594 1 12.6667V14"
        stroke="#071A3A"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7C8.65685 7 10 5.65685 10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4C4 5.65685 5.34315 7 7 7Z"
        stroke="#071A3A"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PenDraw(props: { onClick?: () => void }) {
  return (
    <div className="w-6 h-6 grid place-items-center rounded duration-200 hover:bg-gray-100" onClick={props.onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 12.4141H13" stroke="#B5AA9C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M10 1.41421C10.2652 1.149 10.6249 1 11 1C11.1857 1 11.3696 1.03658 11.5412 1.10765C11.7128 1.17872 11.8687 1.28289 12 1.41421C12.1313 1.54554 12.2355 1.70144 12.3066 1.87302C12.3776 2.0446 12.4142 2.2285 12.4142 2.41421C12.4142 2.59993 12.3776 2.78383 12.3066 2.95541C12.2355 3.12699 12.1313 3.28289 12 3.41421L3.66667 11.7475L1 12.4142L1.66667 9.74755L10 1.41421Z"
          stroke="#B5AA9C"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function Coin() {
  return (
    <div className="w-6 h-6 grid place-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="0.7" y="0.7" width="14.6" height="14.6" rx="7.3" stroke="#B5AA9C" strokeWidth="1.4" />
        <path
          d="M11 6.53061V6.53061C10.7237 5.35773 9.7349 4.48852 8.53628 4.36485L8.37352 4.34806C6.56918 4.1619 5 5.57751 5 7.39142V8.60858C5 10.4225 6.56918 11.8381 8.37352 11.6519L8.53627 11.6351C9.7349 11.5115 10.7237 10.6423 11 9.46939V9.46939"
          stroke="#B5AA9C"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function Copy(props: { color?: "white" | "beige" }) {
  const color = props.color === "white" ? "#FFFFFF" : "#B5AA9C";
  return (
    <div className="w-6 h-6 grid place-items-center hover:bg-gray-100 duration-200 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18.4001 9.6001H11.2001C10.3164 9.6001 9.6001 10.3164 9.6001 11.2001V18.4001C9.6001 19.2838 10.3164 20.0001 11.2001 20.0001H18.4001C19.2838 20.0001 20.0001 19.2838 20.0001 18.4001V11.2001C20.0001 10.3164 19.2838 9.6001 18.4001 9.6001Z"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.4 14.4H5.6C5.17565 14.4 4.76869 14.2314 4.46863 13.9314C4.16857 13.6313 4 13.2243 4 12.8V5.6C4 5.17565 4.16857 4.76869 4.46863 4.46863C4.76869 4.16857 5.17565 4 5.6 4H12.8C13.2243 4 13.6313 4.16857 13.9314 4.46863C14.2314 4.76869 14.4 5.17565 14.4 5.6V6.4"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CreditCard() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
      <path
        d="M15.5455 1.5H2.45455C1.65122 1.5 1 2.15122 1 2.95455V11.6818C1 12.4851 1.65122 13.1364 2.45455 13.1364H15.5455C16.3488 13.1364 17 12.4851 17 11.6818V2.95455C17 2.15122 16.3488 1.5 15.5455 1.5Z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1 5.86328H17" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const Miscellaneous = {
  GoogleLogo,
  Upload,
  Hamburger,
  Popover,
  Tooltip,
  User,
  PenDraw,
  Coin,
  Copy,
  CreditCard
};
