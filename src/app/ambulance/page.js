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

            <div className="flex flex-col m-0 container_ambulance py-[200px]">
                <div className="px-[50px] items-start justify-start text-start">
                    <span className="font-bold text-[32px] text-[#FFFFFF] text-start justify-start items-start">Ambulance and responders are on the way</span>
                </div>
                <div className="items-center justify-center px-[50px]">
                    <span className="text-[#FFFFFF]">Speak calmly to the person until the first aider arrives. First responders are on the way and the rescue service is alarmed.</span>
                </div>
                <div className="flex items-center justify-center">
                    <Image src="/ambulance.svg" alt="blood" width={450} height={450} />
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-row bg-[#FFFAF6] py-[2px] px-[10px] rounded-[10px]">
                        <Image src="/cancelRequest.svg" alt="blood" width={25} height={23} />
                        <span className="text-[#AB3E4B]">Cancel Request</span>
                    </div>
                </div>

            </div>
        </>
    );
}
