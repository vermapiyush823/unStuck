import { Input } from "@/components/ui/input";
import Image from "next/image";
const globalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search..."
          className="paragraph-regular no-focus placeholder border-none shadow-none background-light800_darkgradient "
        />
      </div>
    </div>
  );
};

export default globalSearch;
