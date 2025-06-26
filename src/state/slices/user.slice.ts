import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userType } from "../../static/userType.enum";
import axios from "axios";
import { UserAPIs } from "../../api";

type userStateType = {
  id: string;
  role?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  country?: string;
  createdAt?: string;
  updatedAt?: string;
  age?: number;
  profession?: string;
  education?: string;
  interests?: string;
  objective?: string;
  active?: boolean;
  verified?: boolean;
}
const userInitType: userStateType = {
  id: "",
  role: userType.visitor, // Default role
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  country: "",
  createdAt: "",
  updatedAt: "",
  age: undefined,
  profession: "",
  education: "",
  interests: "",
  objective: "",
  active: true,
  verified: false,
}
const userAPIs = new UserAPIs();
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (userId: string) => {
    const response = await userAPIs.getUserByIdApi(userId);
    return response.data;
  }
);
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData: any) => {
    const response = await userAPIs.registerUserApi(userData);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData: any) => {
    const response = await userAPIs.loginUserApi(userData);
    return response.data;
  }
);

export const verifyOtp = createAsyncThunk(
  "user/verifyOtp",
  async (otpData: any) => {
    const response = await userAPIs.verfiyotpApi(otpData);
    return response.data;
  }
);




const userSlice = createSlice({
  name: "user",
  initialState: userInitType,
  reducers: {

  },
  extraReducers: (builder) => {

    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      });
  }
});

export const { changeType } = userSlice.actions;
export default userSlice.reducer;