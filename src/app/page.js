import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/logo.svg"
        alt="logo"
        width={900}
        height={10}
        className="transition-transform"
      />
      <Link href="/profile/1" className="text-[20px] bg-[#DCF2F9] px-[250px] rounded-[30px] text-[#273B7A] hover:bg-white border-2 border-[#DCF2F9] hover:border-[#273B7A]">
        Start now
      </Link>
    </div>
  );
}
