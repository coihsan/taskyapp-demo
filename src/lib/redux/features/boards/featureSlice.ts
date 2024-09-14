import { FeatureOptionsType } from "@/lib/types/db.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState : FeatureOptionsType | null = null

export const addFeatureOptions = createSlice({
    name: 'feature',
    initialState,
    reducers:{
        addBoard: (state) =>{
            // do something
        },
        removeBoard: (state) =>{
            // do something
        },
        addMedia: (state) =>{
            // do something
        },
        removeMedia: (state) =>{
            // do something
        },
        addWorkflow: (state) =>{
            // do something
        },
        removeWorkflow: (state) =>{
            // do something
        },
        addNotes: (state) =>{
            // do something
        },
        removeNotes: (state) =>{
            // do something
        },
        addCalender: (state) =>{
            // do something
        },
        removeCalender: (state) =>{
            // do something
        },
        addFunnel: (state) =>{
            // do something
        },
        removeFunnel: (state) =>{
            // do something
        },
    }
})

export const {} = addFeatureOptions.actions
export default addFeatureOptions.reducer