import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// var categorylist = axios.get("https://api.chucknorris.io/jokes/categories").then(function (data) {
//   return data.data.join(',')
// }).catch((error) => {
//   return error.data
// })
var jstatus=false;
async function categorylist(){
  return(
  await axios.get("https://api.chucknorris.io/jokes/categories").then(function (data) {
    jstatus = false;
    return data.data.join(',')
  }).catch((error) => {
    return error.data
  }))
}

const fetchJokes = createAsyncThunk("jokes/jokecategory", async function (category) {
  return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then(function (data) {
    console.log(data.data.value);
    jstatus = true;
    return data.data.value
  }).catch(async function (error) {
    const list = await categorylist();
      return "Please check avalable categories: " + list
  })
})
const initialState = {
  jokes: ""
}
const jokeSlicer = createSlice(
  {
   
    name: "Jokes",
    initialState,
    reducers: {
    }, extraReducers: (build) => {
      build.addCase(fetchJokes.pending, function () {
        console.log("Loading....");
      }).addCase(fetchJokes.fulfilled, (state, action) => {
        state.jokes = action.payload;
        state.jokesstatus = jstatus;
        //state.loadstatus = jstatus;
      })
    }

  }
  
)
export default jokeSlicer;
export { fetchJokes } 