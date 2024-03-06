"use client";

import { useState, useEffect, useRef, MutableRefObject } from "react";
import SingleQuestion from "./SingleQuestion";

type propType = {
  questions: Object;
};

enum questionEnum {
  timer = 5
}

export default function QuestionView({ questions }: Readonly<propType>) {
  console.log(questions);
  
  const [quest, setQuest] = useState(questions?.results);
  const [current, setCurrent] = useState(0);

  const [single, setSingle] = useState<Object>({});
  let [time, setTime] = useState(questionEnum.timer);

  const totalQuestion: number = quest?.length ?? 0;

  let intervalRef = useRef<MutableRefObject<null>>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(intervalRef.current);
        handleNextClick();
      }
    }, 1000); // Run the interval every second

    return () => clearInterval(intervalRef.current); // Cleanup the interval on component unmount
  }, [time]);

  useEffect(() => {
    setSingle(quest[current]);

    console.log("single", single);
  }, [current]);

  const handleNextClick = () => {
    console.log("Single",totalQuestion-1,current);
    

    if(totalQuestion-1 != current){
      setCurrent(current + 1);
      setTime(questionEnum.timer);
    }else{
      console.log("Completed");
      clearInterval(intervalRef.current)
      intervalRef.current = null;
    }
    
  };

  return (
    <main>
      {current}
      {(totalQuestion-1 != current) && <SingleQuestion question={quest[current]} time={time} />}
      <button
        onClick={() => {
          handleNextClick();
        }}
      >
        NEXT
      </button>
    </main>
  );
}
