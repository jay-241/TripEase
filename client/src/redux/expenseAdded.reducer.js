//Author: Jainil Sevalia(jn498899@dal.ca) || Banner Id: B00925445

import { createSlice } from "@reduxjs/toolkit";

const addExpenseSlice = createSlice({
  name: "addExpense",
  initialState: { expenseAdded: "" },
  reducers: {
    expenseAdded: (state, action) => {
      state.expenseAdded = action.payload;
    },
  },
});

export const { expenseAdded } = addExpenseSlice.actions;
export default addExpenseSlice.reducer;
