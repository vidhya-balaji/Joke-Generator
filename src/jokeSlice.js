import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// var categorylist = axios.get("https://api.chucknorris.io/jokes/categories").then(function (data) {
//   return data.data.join(',')
// }).catch((error) => {
//   return error.data
// })

async function categorylist(){
  return(
  await axios.get("https://api.chucknorris.io/jokes/categories").then(function (data) {
    return data.data.join(',')
  }).catch((error) => {
    return error.data
  }))
}

const fetchJokes = createAsyncThunk("jokes/jokecategory", async function (category) {
  return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then(function (data) {
    console.log(data.data.value);
    return data.data.value
  }).catch(async function (error) {
    const list = await categorylist();
      return error.response.data.error + error.response.data.path +list
  })
})
const initialState = {
  jokes: "Ready to Rofl"
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
      })
    }

  }
)
export default jokeSlicer;
export { fetchJokes } 