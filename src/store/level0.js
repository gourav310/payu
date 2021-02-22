import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const newSurvey= createAsyncThunk("surveys/newSurvey",
      async (_,thunkAPI)=>{
          console.log(thunkAPI.getState())
          const id= thunkAPI.getState().length+1;
          return id;
      })

export const surveySlice = createSlice({
    name:"surveys",
    initialState:[],
    reducers:{
        addQuestion:(state,action)=>{ 
        const { surveyId, type, options, question } = action.payload;
      console.log(surveyId);
      
        try {
            const q= state.find((s) => s.surveyId == surveyId).questions;
        } catch (error) {
            state.push({ questions: [],
                surveyId: 1,
                isPublished: false})
        }
        const q=state.find((s) => s.surveyId == surveyId).questions;
        const qId = String(q.length + 1);
        q.push({
          qId,
          type,
          question,
          options,
        });},
        markPublished:(state,action)=>{state.find((s)=>s.surveyId == action.payload.surveyId).isPublished=true}
    },
    extraReducers:{
        [newSurvey.fulfilled]:(state,action)=>{
            state.push({ questions: [],
                surveyId: action.payload,
                isPublished: false})
        }
    }
})
