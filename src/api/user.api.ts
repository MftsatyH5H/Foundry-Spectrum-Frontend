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

  getUserByIdApi = (id: string): Promise<AxiosResponse<any>> => {
    return axios.get<any>(`${this.baseUrl}/users/${id}`);
  };
}

export default UserAPIs;
