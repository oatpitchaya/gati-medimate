import '../src/app/globals.css'

export default function Toggle( {setShowRepeat} ) {
    const handleToggle = (e) => {
        setShowRepeat(e.target.checked);
    };
    return (
        <>
            <div className="flex flex-col md:flex-row flex-wrap justify-around items-center">
                <label htmlFor="foobar3" className="flex flex-col flex-wrap items-center cursor-pointer mb-4 md:mb-0">
                    <div className="relative">
                        <input id="foobar3" type="checkbox" className="hidden" onChange={handleToggle}/>
                        <div className="toggle__line w-12 h-6 bg-gray-200 rounded-full shadow-inner"></div>
                        <div className="toggle__dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                    </div>
                </label>
            </div>

        </>
    );
}
