import Image from "next/image";

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
    return (
        <div className="flex flex-col gap-7">
            <span className="text-[25px] font-bold">Reminders</span>
            <div className="flex flex-row gap-5">
                <div
                    className="w-[90px] h-[120px] rounded-[30px]
                inline-flex items-center justify-center 
                bg-[#C9ECCB] text-gray-700 text-xl font-bold
                flex-col"
                >
                    <div>
                        <span className="text-[50px]">12</span>
                    </div>
                    <div>
                        <span className="text-[20px]">Tue</span>
                    </div>
                </div>
                <div
                    id="medicationPlan"
                    className="flex flex-col gap-2.5 rounded-[5px] drop-shadow-md w-[621px]"
                >
                    <div className="flex flex-row px-5 py-3 bg-[#FFFFFF] gap-2">
                        <div>
                            <Image src="/drugsample.svg" alt="blood" width={70} height={70} />
                        </div>
                        <div className="flex flex-col grow">
                            <span className="text-[18px] font-bold bottom-0">
                                LEVOTHYROXINE
                            </span>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex flex-row gap-2 leading-3">
                                    <span className="text-[15px] font-semibold text-[#868C8C]">
                                        Euthyrox
                                    </span>
                                    <span className="text-[12px] text-[#868C8C] font-semibold">
                                        25 mcg
                                    </span>
                                </div>
                                <div className="flex flex-row bg-[#F5E0D9] justify-center py-1.5 gap-1.5 rounded-[15px] ml-auto px-3">
                                    <Image
                                        src="/reminder.svg"
                                        alt="blood"
                                        width={20}
                                        height={20}
                                    />
                                    <span className="text-[15px] text-[#555756] font-semibold">
                                        Set Reminder
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row px-5 py-3 bg-[#FFFFFF] gap-2">
                        <div>
                            <Image src="/drugsample.svg" alt="blood" width={70} height={70} />
                        </div>
                        <div className="flex flex-col grow">
                            <span className="text-[18px] font-bold bottom-0">
                                LEVOTHYROXINE
                            </span>
                            <div className="flex flex-col gap-2.5">
                                <div className="flex flex-row gap-2 leading-3">
                                    <span className="text-[15px] font-semibold text-[#868C8C]">
                                        Euthyrox
                                    </span>
                                    <span className="text-[12px] text-[#868C8C] font-semibold">
                                        25 mcg
                                    </span>
                                </div>
                                <div className="flex flex-row bg-[#F5E0D9] justify-center py-1.5 gap-1.5 rounded-[15px] ml-auto px-3">
                                    <Image
                                        src="/reminder.svg"
                                        alt="blood"
                                        width={20}
                                        height={20}
                                    />
                                    <span className="text-[15px] text-[#555756] font-semibold">
                                        Set Reminder
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
