import { useState } from "react";
import Button from "../button";
import Icon from "../icon";

export default function Accordian(props: { data: { title: string; description: string | null }[] }) {
  const { data } = props;

  return (
    <div className="flex flex-col gap-4 flex-grow">
      {data.map((item, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <AccordianItem title={item.title} description={item.description || ""} />
          {index !== data.length - 1 && <hr className="border-gray-200" style={{ borderTopWidth: 1.2 }} />}
        </div>
      ))}
    </div>
  );
}

function AccordianItem(props: { title: string; description: string }) {
  const [open, setOpen] = useState(false);

  const openItem = () => setOpen(!open);
  return (
    <div onClick={openItem} className="cursor-pointer pl-4 flex flex-col">
      <div className="flex flex-grow justify-between items-center">
        <div className="text-body-18 md:text-body-18 font-medium text-gray-700 hover:underline">{props.title}</div>
        <Button
          onClick={openItem}
          size="icon_only"
          variant="tertiary"
          icons={{
            leading: (
              <div className={`transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}>
                <Icon.Chevron direction="down" size={16} color="900" />
              </div>
            )
          }}
        />
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-body-14 md:text-body-14 font-regular text-gray-700 pb-4">{props.description}</div>
      </div>
    </div>
  );
}
