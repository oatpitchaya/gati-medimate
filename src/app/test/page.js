import Image from "next/image";
import Toggle from "../../../components/toggle";

export default function Schecdule() {
    const todayDate = new Date();

    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = todayDate.toLocaleString('en-US', options);

    const day = String(todayDate.getDate()).padStart(2, '0');
    const month = String(todayDate.getMonth() + 1).padStart(2, '0');
    const year = todayDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return (
        <div className="flex flex-col bg-[#DCF2FA] gap-[10px] p-5 drop-shadow-lg absolute">
            <div className="flex flex-col">
                <button>
                    <Image
                        src="/x.svg"
                        alt="blood"
                        width={30}
                        height={20}
                        className="ml-auto"
                        // onClick={() => (setShow(false))}
                    />
                </button>

                <span className="font-bold text-[20px] text-[#757575]">Medication Label</span>
            </div>
            <div className="flex flex-col gap-[15px]">
                <div id="box" className="flex flex-row bg-[#FFFAF6] rounded-[15px] px-[10px] py-[5px] gap-[10px] items-center border-[1px] border-black">
                    <div>
                        <Image src="/image.png" alt="blood" width={50} height={50} />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold text-[25px] leading-4 focus:outline-none focus:ring-0 outline-none border-none">
                            <input type="text" className="bg-[#FFFAF6] border-0 outline-0 border-none focus:outline-none focus:ring-0" placeholder="name" />
                        </div>
                        <div className="flex flex-row gap-[10px]">
                            <span className="font-bold text-[18px] text-[#868C8C]">
                                <input type="text" className="bg-[#FFFAF6] w-[13px] border-0 outline-0 border-none focus:outline-none focus:ring-0" placeholder="name" />
                            </span>
                            <span className="font-medium text-[14px] leading-7 text-[#868C8C]">
                                <input type="text" className="bg-[#FFFAF6] border-0 outline-0 border-none focus:outline-none focus:ring-0 p-0" placeholder="quantity" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-row bg-[#FFFAF6] rounded-[15px] gap-[25px] pr-[10px] pl-[15px] items-center border-[1px] border-black">
                        <span className="font-semibold text-[23px]">{formattedDate}</span>
                        <Image
                            src="/Calendar.svg"
                            alt="blood"
                            width={30}
                            height={20}
                        />
                    </div>
                    <div className="flex flex-row bg-[#FFFAF6] rounded-[15px] gap-[50px] py-2.5 px-4 border-[1px] border-black">
                        <span className="font-semibold text-[23px]">
                            {formattedTime}
                        </span>
                        <Image
                            src="/clock.svg"
                            alt="blood"
                            width={30}
                            height={20}
                        />
                    </div>
                </div>
                <div className="flex flex-row bg-[#FFFAF6] rounded-[15px] gap-2 py-1 px-4 justify-between border-[1px] border-black">
                    <span className="font-medium text-[32px]">Repeat</span>
                    <Toggle />


                </div>
                    <div className="ml-auto px-[40px] bg-[#FFFF41] rounded-[15px] font-semibold text-[20px] border-[1px] border-black">
                        create
                    </div>
            </div>
            {/* <div className="flex flex-col md:flex-row flex-wrap justify-around items-center">
                <label htmlFor="foobar3" className="flex flex-col flex-wrap items-center cursor-pointer mb-4 md:mb-0">
                    <div className="relative">
                        <input id="foobar3" type="checkbox" className="hidden" />
                        <div className="toggle__line w-12 h-6 bg-gray-200 rounded-full shadow-inner"></div>
                        <div className="toggle__dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                    </div>
                </label>
            </div> */}
        </div>
        
        

    );
}
