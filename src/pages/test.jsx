import { useEffect, useState } from "react";
import Qns from "../components/question";
import { Link } from "react-router-dom";

export default function Test(props) {
    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState([]);
    const [time, setTime] = useState(0);
    const [n, setN] = useState(0);
    const [qtime, setQtime] = useState({
        QuestionID: "",
        time: 0,
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time + 1);
        }, 1000);
        question.map((q) => {
            props.res((prev) => {
                return [
                    ...prev,
                    {
                        Question: {
                            QuestionID: q.QuestionID,
                            time: qtime.time,
                        },
                        TotalTimeTaken: time,
                    }
                ]
            });
        });
        return () => clearTimeout(timer);
    }, [time]);

    const questionslist = props.questions;

    const getQuestion = async (q) => {
        const response = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${q}`);
        const data = await response.json();
        return data[0];
    }

    useEffect(() => {
        if (questionslist.length > 0) {
            Promise.all(questionslist.map(async (q) => {
                const data = await getQuestion(q);
                return data;
            })).then((questionData) => {
                setQuestion(questionData);
                setLoading(false);
                console.log(questionData); // This will log the updated state
            });
        }
    }, [questionslist]);
    

    if (loading) {
        return (
            <>
                <div className="flex flex-col justify-center items-center bg-green-500 w-[100vw]">
                    <p className="text-4xl font-bold text-black m-10">Loading...</p>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="">
                    <p className="text-sm text-end font-semibold text-black m-10">Time: {time}s</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[100vw]">
                    <Qns question={question[n]} timer={setQtime} time={qtime}/>
                </div>
                <div className="flex flex-row justify-center items-center w-[100vw]">
                    <button className="flex flex-row justify-center items-center w-[20vw] h-[10vh] bg-black rounded-xl text-white text-2xl font-semibold m-2" onClick={() => {
                        if (n === 0) {
                            setN(0);
                        } else {
                            setN(n - 1);
                        }
                    }}>Previous</button>
                </div>
                <div className="flex flex-row justify-center items-center w-[100vw]">
                    <button className="flex flex-row justify-center items-center w-[20vw] h-[10vh] bg-black rounded-xl text-white text-2xl font-semibold m-2" onClick={() => {
                        if (n === question.length - 1) {
                            setN(question.length - 1);
                        } else {
                            setN(n + 1);
                        }
                    }}>Next</button>
                </div>
                <div className="flex flex-row justify-center items-center w-[100vw]">
                    <Link to="/result" className="flex flex-row justify-center items-center w-[20vw] h-[10vh] bg-black rounded-xl text-white text-2xl font-semibold m-2" onClick={
                        () => {
                            props.res((prev) => {
                                return [
                                    ...prev,
                                    {
                                        Question: {
                                            QuestionID: question[n].QuestionID,
                                            time: qtime.time,
                                        },
                                        TotalTimeTaken: time,
                                    }
                                ]
                            }
                            );
                        }
                    }>Submit</Link>
                </div>
            </>
        )
    }
}