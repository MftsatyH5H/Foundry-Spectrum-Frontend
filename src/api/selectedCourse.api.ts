import axios, { AxiosResponse } from 'axios';
// import {
//   IUserCreate,
//   IUserSignIn,
// } from '../interfaces/domain/index';
import { BaseAPIs } from '.';

/**
 * This class contain HTTP requests to the backend API of User
 */
class selectedCourseAPIs {
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

  getCourseByIdApi = (id: string): Promise<AxiosResponse<any>> => {
    return axios.get<any>(`/api/course/${id}`);
  };

  /**
   * Process course payment
   * @param courseId - The course ID
   * @param paymentData - Payment information
   * @returns Promise<AxiosResponse<any>>
   */
  processPayment = (courseId: string, paymentData: any): Promise<AxiosResponse<any>> => {
    return axios.post<any>(`/api/course/${courseId}/enroll`, paymentData);
  };
}

export default selectedCourseAPIs;
