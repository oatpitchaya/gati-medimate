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
            <Image
                src="/x.svg"
                alt="blood"
                width={30}
                height={20}
                className="ml-auto"
            // onClick={() => (setShow(false))}
            />
            <div className="flex justify-center items-center">
                <Image
                    src="/clock2.svg"
                    alt="blood"
                    width={61}
                    height={61}
                    className=""
                // onClick={() => (setShow(false))}
                />
            </div>

            <div className="text-center">
                <span className=" font-bold text-[32px]">It’s time to take your <br />medication!</span>
            </div>
            <div id="box" className="flex flex-row bg-[#FFFAF6] mt-[10px] rounded-[15px] px-[10px] py-[3px] gap-[10px] items-center border-[1px] border-black">
                <div>
                    <Image src="/amlodipine.svg" alt="blood" width={50} height={50} />
                </div>
                <div className="flex flex-col leading-4 mr-[250px]">
                    <div className="font-bold text-[18px] focus:outline-none focus:ring-0 outline-none border-none">
                        {/* <input type="text" className="bg-[#FFFAF6] border-0 outline-0 border-none focus:outline-none focus:ring-0" placeholder="name" /> */}
                        <span>PARACETAMOL</span>
                    </div>
                    <div className="flex flex-row gap-[5px]">
                        <span className="font-bold text-[15px] leading-1 text-[#868C8C]">
                            <span>Panadol</span>
                        </span>
                        <span className="font-medium text-[12px] text-[#868C8C]">
                            {/* <input type="text" className="bg-[#FFFAF6] border-0 outline-0 border-none focus:outline-none focus:ring-0 p-0" placeholder="quantity" /> */}
                            <span>500 mg</span>
                        </span>
                    </div>
                </div>
                <div className="ml-auto">
                    <Image src="/extend.svg" alt="blood" width={22} height={22} />
                </div>   
            </div>
            <div className="ml-auto px-[50px] mt-[20px] bg-[#FFFF41] rounded-[15px] font-semibold text-[20px] border-[1px] border-black">
                    Done
                </div>
        </div>

    );
}
