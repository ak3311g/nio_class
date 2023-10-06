import { Link } from "react-router-dom";

export default function Homepage(props) {

    return (
        <>
            <div className={`flex flex-col justify-center items-center bg-green-500 w-[100vw]`}>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-4xl font-bold text-black m-10">Welcome</p>
                    <input type="text" className={`bg-white rounded-md p-2`} placeholder="Enter Name" required/>
                </div>
                <div className="flex flex-col justify-center items-center mb-20">
                    <p className="text-2xl font-bold text-black m-10">Select Questions</p>
                    <ul className="flex flex-col justify-center items-center w-[60vw]">
                        <li className="flex flex-row justify-between items-center w-[90%] border-[1px] rounded-xl m-2 p-2">
                            <p className="text-xl font-bold text-black">AreaUnderTheCurve_21</p>
                            <input type="checkbox" className="w-[20px] h-[20px]" onClick={() => props.addqns("AreaUnderTheCurve_21")} />
                        </li>
                        <li className="flex flex-row justify-between items-center w-[90%] border-[1px] rounded-xl m-2 p-2">
                            <p className="text-xl font-bold text-black">BinomialTheorem_13</p>
                            <input type="checkbox" className="w-[20px] h-[20px]" onClick={() => props.addqns("BinomialTheorem_13")} />
                        </li>
                        <li className="flex flex-row justify-between items-center w-[90%] border-[1px] rounded-xl m-2 p-2">
                            <p className="text-xl font-bold text-black">BinomialTheorem_24</p>
                            <input type="checkbox" className="w-[20px] h-[20px]" onClick={() => props.addqns("BinomialTheorem_24")} />
                        </li>
                        <li className="flex flex-row justify-between items-center w-[90%] border-[1px] rounded-xl m-2 p-2">
                            <p className="text-xl font-bold text-black">AreaUnderTheCurve_15</p>
                            <input type="checkbox" className="w-[20px] h-[20px]" onClick={() => props.addqns("AreaUnderTheCurve_15")} />
                        </li>
                        <li className="flex flex-row justify-between items-center w-[90%] border-[1px] rounded-xl m-2 p-2">
                            <p className="text-xl font-bold text-black">AreaUnderTheCurve_2</p>
                            <input type="checkbox" className="w-[20px] h-[20px]" onClick={() => props.addqns("AreaUnderTheCurve_2")} />
                        </li>
                        <li className="flex flex-row justify-between items-center w-[90%] border-[1px] rounded-xl m-2 p-2">
                            <p className="text-xl font-bold text-black">BinomialTheorem_3</p>
                            <input type="checkbox" className="w-[20px] h-[20px]" onClick={() => props.addqns("BinomialTheorem_3")} />
                        </li>
                        <li className="flex flex-row justify-between items-center w-[90%] border-[1px] rounded-xl m-2 p-2">
                            <p className="text-xl font-bold text-black">BinomialTheorem_4</p>
                            <input type="checkbox" className="w-[20px] h-[20px]" onClick={() => props.addqns("BinomialTheorem_4")} />
                        </li>
                        <li className="flex flex-row justify-between items-center w-[90%] border-[1px] rounded-xl m-2 p-2">
                            <p className="text-xl font-bold text-black">AreaUnderTheCurve_5</p>
                            <input type="checkbox" className="w-[20px] h-[20px]" onClick={() => props.addqns("AreaUnderTheCurve_5")} />
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center w-full">
                    <Link to="/test" className="flex flex-row justify-center items-center w-[20vw] h-[10vh] bg-black rounded-xl text-white text-2xl font-semibold m-2">Start Test</Link>
                </div>
            </div>
        </>
    )
}