import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  /* slice name, 
     initial state,
     object of reducer func which contains action creators and action types*/
  name: "user",
  initialState: initialState,
  reducers: {
    createUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      const id = action.payload;
      console.log("id", id);
      state.splice(id, 1);
    },
  },
  // for global function use this extrareducer
  extraReducers(builder) {
    builder.addCase("clearUsersAll", () => {
      return [];
    });
  },
});

export const { createUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
