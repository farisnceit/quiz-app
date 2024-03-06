"use client"

import { useState,useEffect } from "react";
import SingleQuestion from "./SingleQuestion";

type propType = {
    questions : Object
}

export default function QuestionView({questions}: Readonly<propType>) {

    console.log(questions)

    const TOTAL_QUESTION = 10;

    const [quest,setQuest] = useState(questions?.results)
    const [current,setCurrent] = useState(0);    
   
    const [single, setSingle] = useState<Object>({});
    let [time, setTime] = useState(30); 

    useEffect(() => {
        const interval = setInterval(() => {
          if (time > 0) {
            setTime(time - 1);
          } else {
            clearInterval(interval);
            handleNextClick();
            //router.push('/destination-page'); // Redirect to the destination page after countdown
          }
        }, 1000); // Run the interval every second
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount
      }, [time]);

   

    useEffect(() => {
        setSingle(quest[current])

        console.log("single",single)
    }, [current])


    const handleNextClick = () =>{
        console.log("Single")
        setTime(30);
        setCurrent(current+1);
        
    } 

    
    

    return <main>
        <SingleQuestion question={quest[current]} time={time} />
        <button onClick={()=>{handleNextClick()}}>NEXT</button>
        </main>
  }