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

                <div className="flex flex-col gap-4 m-0">
                    <div className="flex flex-row justify-between items-center">
                        <span className="text-[24px] font-bold">Choose a video visit that is right for you</span>
                        <div
                        >
                        </div>

                    </div>
                    <div className="flex flex-row gap-5">
                        <div
                            id="medicationPlan"
                            className="flex flex-col gap-2.5 rounded-[5px] w-[621px] overflow-auto max-h-[70vh]"
                        >

                            <div className="flex flex-row px-[20px] py-[5px] bg-[#FFFFFF] gap-3 rounded-[5px] drop-shadow-lg">
                                <div className="flex justify-center">
                                    <Image src="/doctor.svg" alt="blood" width={47} height={47} />
                                </div>
                                <div className="flex flex-col justify-center py-3">
                                    <span className="text-[18px] text-[#85B3C8] font-bold bottom-0 leading-4">
                                        See first available
                                    </span>
                                    <span className="text-[12px] text-[#918E8E] font-bold bottom-0">
                                        Board-certified doctors
                                    </span>
                                    <span className="text-[12px] text-[#000000] font-medium bottom-0">
                                        Current wait time : 1 min
                                    </span>
                                </div>
                                <div className="flex justify-center ml-auto">
                                    <Image src="/arrow.svg" alt="blood" width={22} height={22} />
                                </div>
                            </div>

                            <div className="flex flex-row px-[20px] py-[5px] bg-[#FFFFFF] gap-3 rounded-[5px] drop-shadow-lg">
                                <div className="flex justify-center">
                                    <Image src="/doctor.svg" alt="blood" width={47} height={47} />
                                </div>
                                <div className="flex flex-col justify-center py-3">
                                    <span className="text-[18px] text-[#85B3C8] font-bold bottom-0 leading-4">
                                        Book a medical visit
                                    </span>
                                    <span className="text-[12px] text-[#918E8E] font-bold bottom-0">
                                        Board-certified doctors
                                    </span>
                                    <span className="text-[12px] text-[#918E8E] font-medium bottom-0">
                                        Choose your doctor and time
                                    </span>
                                </div>
                                <div className="flex justify-center ml-auto">
                                    <Image src="/arrow.svg" alt="blood" width={22} height={22} />
                                </div>

                            </div>
                            <div className="flex flex-row px-[20px] py-[5px] bg-[#FFFFFF] gap-3 rounded-[5px] drop-shadow-lg">
                                <div className="flex justify-center">
                                    <Image src="/doctor.svg" alt="blood" width={47} height={47} />
                                </div>
                                <div className="flex flex-col justify-center py-3">
                                    <span className="text-[18px] text-[#85B3C8] font-bold bottom-0 leading-4">
                                        Book a mental health session
                                    </span>
                                    <span className="text-[12px] text-[#918E8E] font-bold bottom-0">
                                        Psychiatrist
                                    </span>
                                    <span className="text-[12px] text-[#918E8E] font-medium bottom-0">
                                        Choose your doctor and time
                                    </span>
                                </div>
                                <div className="flex justify-center ml-auto">
                                    <Image src="/arrow.svg" alt="blood" width={22} height={22} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
