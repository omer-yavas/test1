import axios from 'axios';
import { useEffect, useState } from 'react';
const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);

  // ...

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://octopus-app-577yw.ondigitalocean.app/teacher-question-and-answer-choice'
      );
      var data = JSON.parse(response.data);

      if (Array.isArray(data)) {
        setQuestions(data);
      } else {
        console.log('Data is not an array.');
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // ...

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {questions.map((question, index) => (
        <p key={index}>{question.question_text}</p>
      ))}
    </>
  );
};

export default AllQuestions;
