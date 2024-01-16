//Author: Jay Ramani(jy948858@dal.ca) || Banner Id : B00911903

import { createSlice } from "@reduxjs/toolkit";

const planUpdateSlice = createSlice({
  name: "updatePlan",
  initialState: 
  { planUpdateId: "" , updateStatus:false},
  reducers: {
    planUpdateId: (state, action) => {
      state.planUpdateId = action.payload;
    },
    changeUpdateStatus:(state)=>{
      state.updateStatus = true;
    }
  },
});

export const { planUpdateId, changeUpdateStatus } = planUpdateSlice.actions;
export default planUpdateSlice.reducer;
