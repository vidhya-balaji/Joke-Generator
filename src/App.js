import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokes,categorylist } from "./jokeSlice";

function App()
{
  const [category,setCategory]=useState("");
  const [flag,setFlag]=useState(true);
  const dispatch=useDispatch();
  const joke=useSelector((state)=>{
    return state.joke.jokes;
  })
  function handleCategory(event)
  {
    setCategory(event.target.value);
  }
  function handleJokes()
  {
    dispatch(fetchJokes(category));
  } 
  return(
    <div className="absolute top-[20%] left-[30%] p-4">
      <div className=" p-6">Random Joke Generator</div>
    <input className="border-black border-solid text-black bg-pink-300 w-40 p-2" value={category} onChange={handleCategory}></input>
    <button className="w-30 border-solid black bg-blue-300 p-2"onClick={handleJokes}>Get {category}</button>
   <h1 className="p-4 text-2xl w-[20%]">{joke}</h1>
    </div>
  )
}
export default App;