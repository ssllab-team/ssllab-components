import { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

export default function Container(props: { header?: boolean; footer?: boolean; children?: ReactNode; base?: boolean }) {
  return (
    <div className={`w-full h-full flex flex-col ${props.base ? "bg-base" : ""}`}>
      {props.header && <Header />}
      {props.children}
      {props.footer && <Footer />}
    </div>
  );
}
