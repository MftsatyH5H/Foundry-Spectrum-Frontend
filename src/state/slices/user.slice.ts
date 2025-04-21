import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userType } from "../../static/userType.enum";
import axios from "axios";
import { UserAPIs } from "../../api";
type userStateType = {
  type: userType,
  name: string,
  id: string
}
const userInitType: userStateType = {
  type: userType.visitor,
  name: 'Mohamed',
  id: 'ID',
}
const userAPIs = new UserAPIs();
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (userId: string) => {
    const response = await userAPIs.getUserByIdApi(userId);
    return response.data;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: userInitType,
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.type = action.payload.type;
    });
  }
});

export const { changeType } = userSlice.actions;
export default userSlice.reducer;