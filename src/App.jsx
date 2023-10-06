import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage'
import Test from './pages/test'
import { useEffect, useState } from "react";
import Result from './pages/result';

function App() {

  const [questions, setQuestions] = useState([]);
  const [res, setRes] = useState([
    {
        Question: {
            QuestionID: "",
            time: 0,
        },
        TotalTimeTaken: 0,
    }
]);



  useEffect(() => {
    console.log(questions);
  }, [questions]);

  function addqns(ele) {
    if (questions.includes(ele)) {
      const newQuestions = questions.filter(q => q !== ele);
      setQuestions(newQuestions);
    } else {
      setQuestions([...questions, ele]);
    }
  }

    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage addqns={addqns} questions={questions} />} />
              <Route path="/test" element={<Test questions={questions} res={setRes} />} />
              <Route path="/result" element={<Result res={res} />} />
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default App