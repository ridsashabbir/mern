import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(state);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.pop(action.payload);
      //   console.log("hi", action.payload);
      state.splice(action.payload, 2);
    },
    deleteUsers(state, action) {
      //   state.pop(action);
    },
  },
});

console.log(userSlice.actions);

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
