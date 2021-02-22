import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { surveySlice } from "./level0.js";
import { responseSlice } from "./responseSlice";

const rootReducer = combineReducers({
  surveys: surveySlice.reducer
  // responses: responseSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });
