'use client'
import Image from "next/image";
import Toggle from "./toggle";
import '../src/app/globals.css'
import { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


export default function Schecdule({ show, setShow }) {
    const [showRepeat, setShowRepeat] = useState(false);
    const [showCalendarStart, setShowCalendarStart] = useState(false);
    const [showCalendarEnd, setShowCalendarEnd] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [valueStart, onChangeValueStart] = useState(new Date());
    const [valueEnd, onChangeValueEnd] = useState(new Date());
    if (!show) return null

    const timeNow = new Date();

    const DateFormatter = (date) => {
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = date.toLocaleString('en-US', options);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate
    }

    const TimeFormatter = (date) => {
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = date.toLocaleString('en-US', options);
        return formattedTime
    }

    console.log(startDate);
    console.log(endDate);


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
                        onClick={() => (setShow(false))}
                    />
                </button>

                <span className="font-bold text-[20px] text-[#757575]">Medication Label</span>
            </div>
            <div className="flex flex-col gap-[5px]">
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
                                <input type="number" className="bg-[#FFFAF6] border-0 outline-0 border-none focus:outline-none focus:ring-0 p-0" placeholder="quantity" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <button className="flex flex-row bg-[#FFFAF6] rounded-[15px] pr-[10px] pl-[15px] items-center border-[1px] border-black"
                        onClick={() => (setShowCalendarStart(!showCalendarStart))}>
                        <div className="flex flex-row rounded-[15px] gap-[10px] items-center">
                            <span className="font-semibold text-[23px]">{DateFormatter(valueStart)}</span>
                            <Image
                                src="/Calendar.svg"
                                alt="blood"
                                width={30}
                                height={20}
                            />
                        </div>
                    </button>
                    <div className="flex flex-row bg-[#FFFAF6] rounded-[15px] gap-[50px] py-2.5 px-4 border-[1px] border-black">
                        <span className="font-semibold text-[23px]">
                            {TimeFormatter(timeNow)}
                        </span>
                        <Image
                            src="/clock.svg"
                            alt="blood"
                            width={30}
                            height={20}
                        />
                    </div>
                </div>
                <div>
                    {showCalendarStart ? <Calendar onChange={onChangeValueStart} value={valueStart} setStartDate={valueStart} onClickDay={(e) => { (setShowCalendarStart(false)); setStartDate(valueStart) }} /> : ""}
                </div>
                <div className="flex flex-row bg-[#FFFAF6] rounded-[15px] gap-2 py-1 px-4 justify-between border-[1px] border-black">
                    <span className="font-medium text-[32px]">Repeat</span>
                    <Toggle setShowRepeat={setShowRepeat} />
                </div>
                {showRepeat ? <div className="flex flex-row bg-[#FFFAF6] rounded-[15px] gap-[25px] pb-10 pr-[10px] pl-[15px] items-center border-[1px] border-black">
                    <button className="flex flex-row py-[50px] gap-[10px]" onClick={(e) => setShowCalendarEnd(!showCalendarEnd)}>
                        <span className="font-semibold text-[23px]">{DateFormatter(valueEnd)}</span>
                        <Image
                            src="/Calendar.svg"
                            alt="blood"
                            width={30}
                            height={20}
                        />
                    </button>

                </div>
                    : <></>}

                {showCalendarEnd ? <Calendar onChange={onChangeValueEnd} value={valueEnd} setEndDate={valueEnd} onClickDay={(e) => { (setShowCalendarEnd(false)); setEndDate(valueEnd) }} /> : ""}



                <div className="ml-auto px-[40px] bg-[#FFFF41] rounded-[15px] font-semibold text-[20px] border-[1px] border-black">
                    create
                </div>

            </div>
        </div>

    );
}
