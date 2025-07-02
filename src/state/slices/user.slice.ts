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
if(localStorage.getItem('jwtToken')){
  userInitType.token = localStorage.getItem('jwtToken') || "";
  setAuthHeader(userInitType.token);
  console.log("token"	,userInitType.token);
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
    },
    signOut: (state) => {
      localStorage.removeItem('jwtToken');
      state.token = "";
      state.type = userType.visitor;
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.phoneNumber = "";
      state.country = "";
      state.createdAt = "";
      state.updatedAt = "";
      state.age = undefined;
      state.profession = "";
      state.education = "";
      state.interests = "";
      state.objective = "";
      state.active = true;
      state.verified = false;
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
        localStorage.setItem('jwtToken', token);
        state.token = token;
        setAuthHeader(token);
      })

      // Add case for fetchUserData
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.phoneNumber = action.payload.phoneNumber;
        state.country = action.payload.country;
        state.createdAt = action.payload.createdAt;
        state.type = 'STUDENT';
      });

      ;

      
  }
  
});

export const { setToken, setUserData, signOut } = userSlice.actions;
export default userSlice.reducer;
