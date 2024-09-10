import { FeatureOptionsType } from "@/lib/types/db.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState : FeatureOptionsType | null = null

export const addFeatureOptions = createSlice({
    name: 'feature',
    initialState,
    reducers:{
        setFeatureOption: (state, action) => {
            state = action.payload
        }
    }
})

export const {setFeatureOption} = addFeatureOptions.actions
export default addFeatureOptions.reducer