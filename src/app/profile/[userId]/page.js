'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Username from "@/app/ambulance/page";

export default function Profile() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null)
    const path = usePathname()

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/medicine?userid=1&filter=true')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data);
    //             console.log(data);
    //             console.log(data[0]?.image);
    //         })
    // }, []);
    // useEffect(() => {
    //     const userIdMatch = path.match(/\/profile\/(\d+)/);
    //     const userId = userIdMatch ? userIdMatch[1] : null;

    //     if (userId) {
    //         fetch(`http://localhost:3000/api/users?userid=${userId}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setUser(data[0]);
    //             })
    //             .catch((error) => {
    //                 console.error('Error fetching user:', error);
    //             });
    //     }
    // }, [path]);
    const findDay = (day) => {
        const todayDate = new Date();
        const dayOfWeek = todayDate.getDay();
        const offset = dayOfWeek === 0 ? 0 : dayOfWeek;
        const weekStartDate = new Date(todayDate);
        weekStartDate.setDate(todayDate.getDate() - offset);
        weekStartDate.setDate(weekStartDate.getDate() + day);
        return weekStartDate;
    };

    console.log(findDay(2).getDate());

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className="flex flex-row gap-[40px]">
            <div className="flex flex-col gap-3.5">
                <div className="flex flex-row gap-[10px]">
                    <div
                        id="profilePic"
                        className="flex w-[81px] h-[81px] justify-center items-center"
                    >
                        <Image src="/profilepics/1.jpeg" alt="blood" width={200} height={200} className="rounded-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-bold text-[21px]">My Profile</span>
                        <div className="flex flex-col text-[#273B7A] text-[14px]">
                            <span className="leading-3">username: PitchayaOat</span>
                            {/* <span className="leading-3">username: {user?.username}</span> */}
                            <span>age: 81</span>
                        </div>
                    </div>
                </div>
                <div id="task" className="flex flex-col gap-2">
                    <span className="font-bold text-[21px] ml-1.5">Today's Tasks</span>
                    <div className="grow pl-1.5 bg-[#DCF2FA] rounded-[5px] flex flex-row gap-1.5 py-[2px]">
                        <Image src="/blood.svg" alt="blood" width={11} height={14} />
                        <span className=" text-medium text-[12px]">Check blood pressure</span>
                        <Image
                            src="/right.svg"
                            alt="right"
                            width={11}
                            height={14}
                            className="ml-auto"
                        />
                    </div>
                    <div className="pl-1.5 bg-[#DCF2FA] rounded-[5px] flex flex-row gap-1.5 py-[2px]">
                        <Image src="/walk.svg" alt="blood" width={11} height={14} />
                        <span className="pr-[10px] text-medium text-[12px]">Go for a walk</span>
                        <Image
                            src="/right.svg"
                            alt="right"
                            width={11}
                            height={14}
                            className="ml-auto"
                        />
                    </div>
                    <div className="grow-1 shrink-0 max-w-fit basis-0 px-1.5 bg-[#DCF2FA] rounded-[5px] flex flex-row gap-1.5 py-[2px]">
                        <span className="text-[12px] text-medium">Create new task</span>
                        <Image src="/addNew.svg" alt="blood" width={16} height={18} />
                    </div>
                </div>

                <div id="reminder" className="flex flex-row gap-[4px]">
                    <Link href="/medicine">
                        <div className="flex flex-col items-center mr-[4px]">
                            <Image src="/my_medicine.svg" alt="blood" width={81} height={81} />
                            <span className="text-[9px] font-bold text-[#273B7A]">
                                My Medicine
                            </span>
                        </div>
                    </Link>
                    <Link href="/checkup">
                        <div className="flex flex-col items-center">
                            <Image src="/checkup.svg" alt="blood" width={81} height={81} />
                            <span className="text-[9px] font-bold text-[#273B7A]">
                                Check up
                            </span>
                        </div>
                    </Link>
                    <Link href="/medicine">
                        <div className="flex flex-col items-center">
                            <Image src="/compartment.svg" alt="blood" width={81} height={81} />
                            <span className="text-[8.5px] font-bold text-[#273B7A]">
                                Compartments
                            </span>
                        </div>
                    </Link>



                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div id="cabinet" className="flex flex-col gap-2.5">
                    <div className="font-bold text-[21px]">Your drug cabinet</div>
                    <div id="calendar" className="flex flex-row gap-4">
                        {
                            Array.from(Array(7)).map((_, index) => {
                                const dayDate = findDay(index).getDate();
                                const isToday = dayDate === new Date().getDate()
                                return (
                                    <div
                                        className={`w-[56px] h-[86px] rounded-full 
                inline-flex items-center justify-center
                bg-[${isToday ? '#C9ECCB' : '#DCF2FA'}] text-[${isToday ? '#000000' : '#868C8C'}]
                flex-col`}
                                        key={index}
                                    >
                                        <span className="text-[27px] font-semibold">{findDay(index).getDate()}</span>
                                        <span className="text-[15px] font-bold">{days[findDay(index).getDay()].slice(0, 3)}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className="font-bold text-[21px]">Today’s medication plan</div>
                </div>
                <div
                    id="medicationPlan"
                    className="flex flex-col bg-[#FFFFFF] gap-2.5 py-[16px] px-[9px] rounded-[5px] drop-shadow-md"
                >
                    <div className="flex flex-row">
                        <Image
                            // src={data[0]?.image || "/xxx.jpg"}
                            src={"/metformin.jpg"}
                            alt="blood"
                            width={95}
                            height={95}
                        />
                        <div className="flex flex-col grow">
                            <span className="text-[18px] font-bold bottom-0">
                                {/* {data[0]?.name} */}
                                Metformin
                            </span>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex flex-row gap-2 leading-3">
                                    <span className="text-[15px] font-semibold text-[#868C8C]">
                                        {/* {data[0]?.alias} */}
                                        Metformin Hydrochloride

                                    </span>
                                    <span className="text-[12px] text-[#868C8C] font-semibold">
                                        {data[0]?.qty}
                                        500 mg
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div id="sepLine" className="h-[2px] bg-[#ACB6B6]" />
                        <div className="flex flex-row gap-1">
                            <Image src="/reminder.svg" alt="blood" width={15} height={15} />
                            <span className="text-[#B3B3B3] text-[12px]">reminder scheduled</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
