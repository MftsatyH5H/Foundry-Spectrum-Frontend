import axios, { AxiosResponse } from 'axios';
// import {
//   IUserCreate,
//   IUserSignIn,
// } from '../interfaces/domain/index';
import { BaseAPIs } from '.';

/**
 * This class contain HTTP requests to the backend API of User
 */
class UserAPIs {
  private baseUrl: string;

  constructor() {
    // Create an instance of the BaseAPIs class to get the base URL of the backend API
    const baseAPIs = new BaseAPIs();
    // Set the baseUrl property of the FindingAPIs class to the base URL of the backend API
    this.baseUrl = baseAPIs.baseUrl;
  }

  // createUserApi = (user: IUserCreate) => axios.post(`${this.baseUrl}/users`, user, {
  //   headers: {
  //     'content-type': 'multipart/form-data',
  //   },
  // });

  // loginUserApi = (user: IUserSignIn) => axios.post(`${this.baseUrl}/users/login`, user);

  getMyUser = (): Promise<AxiosResponse<any>> => {
    return axios.get<any>(`/api/user/student/profile`);
  };

  registerUserApi = (user: any): Promise<AxiosResponse<any>> => {
    return axios.post<any>(`/api/auth/register`, user, {
      headers: {
        'Content-Type': 'application/json',
      },

    });

  }
  loginUserApi = (user: any): Promise<AxiosResponse<any>> => {
    return axios.post<any>(`/api/auth/login`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  verfiyotpApi = (otp: any): Promise<AxiosResponse<any>> => {
    return axios.post<any>(`/api/auth/register/verify`, otp, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  verifyEmail = (otp: any): Promise<AxiosResponse<any>> => {
    return axios.post<any>(`/api/auth/otp/verify`, otp, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  sendOtp = (email: any): Promise<AxiosResponse<any>> => {
    return axios.post<any>(`/api/auth/otp/send`, email, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  

  
}
// ask mo2tamen !!!!!
// // In your API setup (e.g., api.ts)
// axios.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response) {
//       // Extract error message from API response
//       return Promise.reject({
//         message: error.response.data.detail || 'Request failed'
//       });
//     }
//     return Promise.reject(error);
//   }
// );


export default UserAPIs;
