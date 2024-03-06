import { unescape } from "lodash";
import { useEffect, useState } from "react";

type propType = {
  question: questionType;
  time: number;
};

type questionType = {
  question: string;
  category: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
};

export default function SingleQuestion({ question, time }: Readonly<propType>) {
  const [options, setOptions] = useState<Array<string>>([]);

  useEffect(() => {
    const answers = [...question.incorrect_answers, question.correct_answer];

    setOptions(answers);
  }, [question]);

  console.log("question", question);
  return (
    <div>
      <p>{time}</p>
      <h4>{unescape(question?.question)}</h4>
      <p>Answers</p>
      <ol>
        {options.map(option => (
          <li>{option}</li>
        ))}
      </ol>
    </div>
  );
}
