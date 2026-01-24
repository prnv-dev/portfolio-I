import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>

{column.data.map(({ icon: Icon, name, link, disabled }) => {
  const isPdf = link.endsWith(".pdf");
  const isMail = link.startsWith("mailto:");

  if (isMail) {
    return (
      <a
        key={`${column.title}-${name}`}
        href={link}
        className={`flex flex-row items-center my-[15px] transition ${
          disabled
            ? "line-through text-gray-500 cursor-not-allowed pointer-events-none"
            : "hover:text-[rgb(112,66,248)]"
        }`}
      >
        {Icon && <Icon />}
        <span className="text-[15px] ml-[6px]">{name}</span>
      </a>
    );
  }

  if (isPdf) {
    return (
      <a
        key={`${column.title}-${name}`}
        href={link}
        download
        className={`flex flex-row items-center my-[15px] transition ${
          disabled
            ? "line-through text-gray-500 cursor-not-allowed pointer-events-none"
            : "hover:text-[rgb(112,66,248)]"
        }`}
      >
        {Icon && <Icon />}
        <span className="text-[15px] ml-[6px]">{name}</span>
      </a>
    );
  }

  return (
    <Link
      key={`${column.title}-${name}`}
      href={link}
      className={`flex flex-row items-center my-[15px] transition ${
        disabled
          ? "line-through text-gray-500 cursor-not-allowed pointer-events-none"
          : "hover:text-[rgb(112,66,248)]"
      }`}
    >
      {Icon && <Icon />}
      <span className="text-[15px] ml-[6px]">{name}</span>
    </Link>
  );
})}



            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Pranav {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
