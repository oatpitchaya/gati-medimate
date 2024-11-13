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
            <div className="flex flex-col gap-4 m-0 ">
                <div className="flex flex-row justify-between items-center">
                    <span className="text-[28px] font-bold">My Medicine Compartment</span>
                </div>
                <div className="flex flex-row gap-[30px] border-[2px] border-black p-[10px] rounded-[20px]">
                    <div className="flex flex-col gap-[10px]">
                        <div className="flex border-2 border-black rounded-[20px] gap-[5px] w-[200px] h-[74px] justify-center items-center">
                            <button>
                                <div className="border-2 border-black flex flex-row rounded-[20px] py-[5px] px-[10px] gap-[5px]">
                                    <Image src="/addnew.svg" alt="blood" width={17} height={17} />
                                    <span className="font-medium text-[10px]">Add your medicine</span>
                                </div>
                            </button>


                        </div>
                        <div className=" border-2 border-black rounded-[20px] w-[200px] h-[74px]">
                            askldjf
                        </div>
                        <div className=" border-2 border-black rounded-[20px] w-[200px] h-[74px]">
                            askldjf
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className=" border-2 border-black rounded-[20px] w-[200px] h-[74px]">
                            askldjf
                        </div>
                        <div className=" border-2 border-black rounded-[20px] w-[200px] h-[74px]">
                            askldjf
                        </div>
                        <div className=" border-2 border-black rounded-[20px] w-[200px] h-[74px]">
                            askldjf
                        </div>
                    </div>
                    <div className="flex flex-col ml-[50px]">
                        <div className=" border-2 border-black rounded-[20px] grow w-[103px]">
                            askldjf
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
