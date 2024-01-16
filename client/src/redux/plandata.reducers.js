//Author: Jay Ramani(jy948858@dal.ca) || Banner Id : B00911903

import { createSlice } from "@reduxjs/toolkit"

export const planDataSlice = createSlice({
    name: "planInfo",
    initialState: {
        planData:[
            
        ],
    },
    reducers: {
        addPlanData:(state,action)=>{
            state.planData.push(action.payload);
        },
    },
});

export const {addPlanData} =  planDataSlice.actions;
export default planDataSlice.reducer;
