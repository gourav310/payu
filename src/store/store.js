import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { level0 } from "./level0.js";
// import { level1 } from "./level1";

const rootReducer = combineReducers({});

export const store = configureStore({ reducer: rootReducer });
