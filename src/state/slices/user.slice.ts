import { createSlice } from "@reduxjs/toolkit";
import { userType } from "../../static/userType.enum";
type userStateType = {
    type: userType,
}
const userInitType: userStateType = {
    type: userType.visitor,
}
const userSlice = createSlice({
  name: "user",
  initialState: userInitType,
  reducers: {
    changeType: (state, action) => {
        state.type = action.payload
    }
  }
});

export const { changeType } = userSlice.actions;
export default userSlice.reducer;