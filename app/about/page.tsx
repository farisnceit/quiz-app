"use client"
import Image from "next/image";

import { useEffect,useState } from "react";




export default async function About() {
   
        const [image, setImage] = useState()

        useEffect(() => {
          
            getDogs()
          
        }, [])

         function getDogs() {
            
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(json => setImage(json))
            
        }
        

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <Image
        src={image?.message}
        width={400}
        height={400}
        alt="random dog image"
      />
      <button onClick={()=>getDogs()}>GENERATE</button>
    </main>
  );
}