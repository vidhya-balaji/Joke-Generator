import { configureStore } from "@reduxjs/toolkit";
import jokeSlicer from "./jokeSlice";

const store=configureStore(
    {
        reducer:{
            joke:jokeSlicer.reducer
        }
    }
)
export default store;