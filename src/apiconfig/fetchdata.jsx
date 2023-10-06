const uri = "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=";


export const fetchdata = async (qnid) => {
    const response = await fetch(uri+qnid);
    const data = await response.json();
    return data;
}