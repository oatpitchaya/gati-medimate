'use client'
import Image from "next/image";
import { useState } from "react";
import Schecdule from "../../../components/schecdule";

export default function Username() {
    const findDay = (day) => {
        const todayDate = new Date();
        const dayOfWeek = todayDate.getDay();
        const offset = dayOfWeek === 0 ? 0 : dayOfWeek;
        const weekStartDate = new Date(todayDate);
        weekStartDate.setDate(todayDate.getDate() - offset);
        weekStartDate.setDate(weekStartDate.getDate() + day);
        return weekStartDate;
    };
    const [showAddMore, setShowAddMore] = useState(false);

    return (
        <>
            {/* <Schecdule /> */}

            <div className={showAddMore ? "container" : ""}>
                <div className="flex flex-col gap-4 m-0">
                    <div className="flex flex-row justify-between items-center">
                        <span className="text-[28px] font-bold">My Medicine</span>
                        <div
                        >
                            <button type="button" className="flex text-center justify-center items-center border-black border-[1px] rounded-[20px] gap-[5px] h-[25px] w-[130px]"
                                onClick={() => (
                                    setShowAddMore(true)
                                )}>
                                <Image
                                    src="/addNew.svg"
                                    alt="blood"
                                    width={21}
                                    height={20}
                                />
                                <span className="text-[16px] font-medium">Add more</span>
                            </button>

                        </div>

                    </div>
                    <div className="flex flex-row gap-5">
                        <div
                            id="medicationPlan"
                            className="flex flex-col gap-2.5 rounded-[5px] w-[621px] overflow-auto max-h-[70vh]"
                        >

                            <div className="flex flex-row  px-[10px] py-[5px] bg-[#FFFFFF] gap-2 drop-shadow-lg">
                                <div>
                                    <Image src="/drugsample.svg" alt="blood" width={70} height={70} />
                                </div>
                                <div className="flex flex-col grow pt-[10px]">
                                    <span className="text-[18px] font-bold bottom-0">
                                        LEVOTHYROXINE
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-2 leading-3">
                                            <span className="text-[15px] font-semibold text-[#868C8C]">
                                                Euthyrox
                                            </span>
                                            <span className="text-[12px] text-[#868C8C] font-semibold">
                                                25 mcg
                                            </span>
                                        </div>

                                    </div>
                                    <div className="flex flex-row gap-1 ml-auto mt-auto">
                                        <Image src="/reminder.svg" alt="blood" width={15} height={15} />
                                        <span className="text-[#B3B3B3] text-[12px]">reminder scheduled</span>
                                    </div>
                                </div>
                                <div className=" overflow-auto">
                                    <div className=" inline-block float-right">
                                        <Image src="/dot.svg" alt="blood" width={15} height={15} className="mt-[5px] absolute right-[10px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row  px-[10px] py-[5px] bg-[#FFFFFF] gap-2 drop-shadow-lg">
                                <div>
                                    <Image src="/ibuprophen.svg" alt="blood" width={70} height={70} />
                                </div>
                                <div className="flex flex-col grow pt-[10px]">
                                    <span className="text-[18px] font-bold bottom-0">
                                        IBUPROFEN
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-2 leading-3">
                                            <span className="text-[15px] font-semibold text-[#868C8C]">
                                                Advil
                                            </span>
                                            <span className="text-[12px] text-[#868C8C] font-semibold">
                                                200 mg
                                            </span>
                                        </div>

                                    </div>
                                    <div className="flex flex-row gap-1 ml-auto mt-auto">
                                        <Image src="/reminder.svg" alt="blood" width={15} height={15} />
                                        <span className="text-[#B3B3B3] text-[12px]">reminder scheduled</span>
                                    </div>
                                </div>
                                <div className=" overflow-auto">
                                    <div className=" inline-block float-right">
                                        <Image src="/dot.svg" alt="blood" width={15} height={15} className="mt-[5px] absolute right-[10px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row  px-[10px] py-[5px] bg-[#FFFFFF] gap-2 drop-shadow-lg">
                                <div>
                                    <Image src="/amlodipine.svg" alt="blood" width={70} height={70} />
                                </div>
                                <div className="flex flex-col grow pt-[10px]">
                                    <span className="text-[18px] font-bold bottom-0">
                                        AMLODIPINE
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-2 leading-3">
                                            <span className="text-[15px] font-semibold text-[#868C8C]">
                                            Norvasc
                                            </span>
                                            <span className="text-[12px] text-[#868C8C] font-semibold">
                                                5 mcg
                                            </span>
                                        </div>

                                    </div>
                                    <div className="flex flex-row gap-1 ml-auto mt-auto">
                                        <Image src="/reminder.svg" alt="blood" width={15} height={15} />
                                        <span className="text-[#B3B3B3] text-[12px]">reminder scheduled</span>
                                    </div>
                                </div>
                                <div className=" overflow-auto">
                                    <div className=" inline-block float-right">
                                        <Image src="/dot.svg" alt="blood" width={15} height={15} className="mt-[5px] absolute right-[10px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row  px-[10px] py-[5px] bg-[#FFFFFF] gap-2 drop-shadow-lg">
                                <div>
                                    <Image src="/drugsample.svg" alt="blood" width={70} height={70} />
                                </div>
                                <div className="flex flex-col grow pt-[10px]">
                                    <span className="text-[18px] font-bold bottom-0">
                                        LEVOTHYROXINE
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-2 leading-3">
                                            <span className="text-[15px] font-semibold text-[#868C8C]">
                                                Euthyrox
                                            </span>
                                            <span className="text-[12px] text-[#868C8C] font-semibold">
                                                25 mcg
                                            </span>
                                        </div>

                                    </div>
                                    <div className="flex flex-row gap-1 ml-auto mt-auto">
                                        <Image src="/reminder.svg" alt="blood" width={15} height={15} />
                                        <span className="text-[#B3B3B3] text-[12px]">reminder scheduled</span>
                                    </div>
                                </div>
                                <div className=" overflow-auto">
                                    <div className=" inline-block float-right">
                                        <Image src="/dot.svg" alt="blood" width={15} height={15} className="mt-[5px] absolute right-[10px]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row  px-[10px] py-[5px] bg-[#FFFFFF] gap-2 drop-shadow-lg">
                                <div>
                                    <Image src="/drugsample.svg" alt="blood" width={70} height={70} />
                                </div>
                                <div className="flex flex-col grow pt-[10px]">
                                    <span className="text-[18px] font-bold bottom-0">
                                        LEVOTHYROXINE
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-2 leading-3">
                                            <span className="text-[15px] font-semibold text-[#868C8C]">
                                                Euthyrox
                                            </span>
                                            <span className="text-[12px] text-[#868C8C] font-semibold">
                                                25 mcg
                                            </span>
                                        </div>

                                    </div>
                                    <div className="flex flex-row gap-1 ml-auto mt-auto">
                                        <Image src="/reminder.svg" alt="blood" width={15} height={15} />
                                        <span className="text-[#B3B3B3] text-[12px]">reminder scheduled</span>
                                    </div>
                                </div>
                                <div className=" overflow-auto">
                                    <div className=" inline-block float-right">
                                        <Image src="/dot.svg" alt="blood" width={15} height={15} className="mt-[5px] absolute right-[10px]" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Schecdule show={showAddMore} setShow={setShowAddMore} />
        </>
    );
}
