import { ReactNode } from "react";
import Footer from "../footer";

export default function Container(props: {
  header?: boolean;
  footer?: ReactNode;
  children?: ReactNode;
  base?: boolean;
}) {
  return (
    <div className={`w-full h-full flex flex-col ${props.base ? "bg-base" : ""}`}>
      {props.header}
      {props.children}
      {props.footer && <Footer toTerms={() => {}} />}
    </div>
  );
}
