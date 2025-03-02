import { useState,CSSProperties  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokes,categorylist } from "./jokeSlice";
import './index.css';
import S1 from "./Image/S1.gif";
import S2 from "./Image/S2.gif";
import F1 from "./Image/F1.gif";
// import BounceLoader from "react-spinners/BounceLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
//   marginTop:25
// };

function App()
{
  // let [loading, setLoading] = useState(false);
  // let [color, setColor] = useState("#ffffff");

  const [category,setCategory]=useState("");
  const [flag,setFlag]=useState(true);
  const dispatch=useDispatch();
  const joke=useSelector((state)=>{
    return state.joke.jokes;
  })

  const jokesstatus=useSelector((state)=>{
    return state.joke.jokesstatus;
  })
  // const loadstatus=useSelector((state)=>{
  //   return state.joke.loadstatus;
  // })
  // const jokesstaaaat=useSelector((state)=>{
  //   return setLoading(state.joke.jokesstatus);;
  // })
  function handleCategory(event)
  {
    setCategory(event.target.value);
  }
  function handleJokes()
  {
    
    //setLoading(true);
    dispatch(fetchJokes(category));
  } 
  // function handleloader()
  // {
  //   setLoading(false); 
  // }
  return(
  //   <div className="absolute top-[20%] left-[30%] p-4">
  //     <div className=" p-6">Random Joke Generator</div>
  //   <input className="border-black border-solid text-black bg-pink-300 w-40 p-2" value={category} onChange={handleCategory}></input>
  //   <button className="w-30 border-solid black bg-blue-300 p-2"onClick={handleJokes}>Get {category}</button>
  //  <h1 className="p-4 text-2xl w-[20%]">{joke}</h1>
  //   </div>
  

<div class="flex justify-center items-center h-screen backgroundImg">
    {jokesstatus === true ? <img src={S1} alt="Funny Animation" class="w-[18%] h-auto items-left justify-left"></img> : jokesstatus === undefined ? "" : <img src={F1} alt="Funny Animation" class="w-[18%] h-auto items-left justify-left"></img>}
  <div class="w-[7%]"></div>
  
  
  <div class="text-white bg-black rounded-3xl shadow-lg insidediv">

  <div className=" p-6 text-center">Random Joke Generator</div>
  <div class="flex items-center justify-center">
     <input className="border-black border-solid text-black w-50 p-2" value={category} onChange={handleCategory}></input>
    <button className="w-30 border-solid black bg-blue-300 p-2"onClick={handleJokes}>Get Joke</button>
  </div>
  <div className="w-[100%]">
{/* 
    {loadstatus === false || loadstatus === true ? "" :   <BounceLoader color={color}  loading={loading} cssOverride={override} size={50} />} */}
    {/* <BounceLoader color={color}  loading={loading} cssOverride={override} size={50} /> */}
  {jokesstatus ===false ? <h1 className="p-2 text-center font-thin text-red-500">No Joke found</h1> : <h1 className="p-2 text-center font-thin"></h1> }
  
   <h1 className=" p-2 text-center font-thin ">{joke}</h1>
  </div>
  
  
    
  </div>
  <div class="w-[7%]"></div>
  {jokesstatus === true ? <img src={S2} alt="Funny Animation" class="w-[18%] h-auto items-left justify-left"></img> : jokesstatus === undefined ? "" : <img src={F1} alt="Funny Animation" class="w-[18%] h-auto items-left justify-left"></img>}
</div>
  )
}
export default App;