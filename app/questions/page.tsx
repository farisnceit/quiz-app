
import QuestionView from "../components/questionView"


async function getData() {
    const res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple',{
        cache : 'no-store'
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
    //console.log(data.results[2].incorrect_answers)
    return <main>
        
        
            <QuestionView questions={data} />
        
        </main>
  }

