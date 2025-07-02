import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userType } from "../../static/userType.enum";
import axios from "axios";
import { UserAPIs } from "../../api";
import { setAuthHeader } from "../../api";
import getMyUser from "../../api/user.api";

type userStateType = {
  id: string;
  token?: string;
  type?: string;
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
  token: "",
  type: userType.visitor, // Default role
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
  async () => {
    const response = await userAPIs.getMyUser();
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
  async (otpData: any, { rejectWithValue }) => {
    try {
      const response = await userAPIs.verfiyotpApi(otpData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || { message: 'OTP verification failed' });
    }
  }
);





const userSlice = createSlice({
  name: "user",
  initialState: userInitType,
  reducers: {
      setToken: (state, action) => {
      state.token = action.payload;
    },

      setUserData: (state, action) => {
      return { ...state, ...action.payload };
    }

  },
  extraReducers: (builder) => {

    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        console.log("OTP verified successfully:", action.payload);
        const token = action.payload.token;
        // Store token in state and localStorage
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);
        return { ...state, ...action.payload.user, verified: true };
      })

      // Add case for fetchUserData
      .addCase(fetchUserData.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      });

      ;

      
  }
  
});

export const { setToken, setUserData } = userSlice.actions;
export default userSlice.reducer;
