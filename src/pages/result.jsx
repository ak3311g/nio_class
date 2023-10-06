
export default function Result(props) {

    const result = [];

    props.res.map((r) => {
        if(result.filter((q) => q.Question.QuestionID === r.Question.QuestionID).length === 0)
        {
            if(r.Question.QuestionID !== ""&&r.Question.QuestionID !== undefined)
            result.push(r);
        }

    });

    console.log(result);
    
    return (
        <>
            <div className="flex flex-col justify-center items-center w-[100vw]">
                <p className="text-4xl font-bold text-black m-10">Result</p>
                {result.map((r) => {
                    return (
                        <div key={r.QuestionID}>
                            <p className="text-2xl font-bold text-black m-10">QuestionID: {r.Question.QuestionID}</p>
                            <p className="text-2xl font-bold text-black m-10">Time:{result.TotalTimeTaken}s</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}