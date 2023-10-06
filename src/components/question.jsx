import { useEffect, useState } from "react";

export default function Qns(props){

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimer(timer + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [timer]);

    useEffect(() => {
        if(props.time.time !== undefined)
        {
            props.time.time = timer;
        }
    }
    , [timer]);

    return (
        <>
             <div className="flex flex-col justify-center items-center w-[100vw]">
                <p className="text-4xl font-bold text-black m-10">{props.question.Question}</p>
            </div>
        </>
    )
}