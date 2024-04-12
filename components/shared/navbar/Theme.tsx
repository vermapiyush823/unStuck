"use client";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";
import { MenubarItem } from "@radix-ui/react-menubar";
import Image from "next/image";
const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state==open]:bg-light-900 dark:focus:bg-dark-200 dark:data[state==open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              width={20}
              height={20}
              alt="sun"
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              width={20}
              height={20}
              alt="moon"
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 win-w-[120px] rounded border py-2 dark:border-dark-200 background-light900_dark300">
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              onClick={() => {
                setMode(item.value);
                if (item.value !== mode) {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
              className="dark:focus:bg-dark-400  flex item-center gap-4 px-2.5 py-2 "
            >
              <Image
                src={item.icon}
                width={16}
                height={16}
                alt={item.value}
                className={`${mode === item.value && "active-theme"}`}
              />
              <span
                className={`body-semibold text-light-500 ${mode === item.value ? "text-primary-500" : "text-dark100_light900"} `}
              >
                {item.label}
              </span>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
