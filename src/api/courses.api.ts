import axios, { AxiosResponse } from 'axios';
import { BaseAPIs } from '.';

/**
 * This class contains HTTP requests to the backend API for Courses
 */
class CoursesAPIs {
  private baseUrl: string;

  constructor() {
    // Create an instance of the BaseAPIs class to get the base URL of the backend API
    const baseAPIs = new BaseAPIs();
    // Set the baseUrl property of the CoursesAPIs class to the base URL of the backend API
    this.baseUrl = baseAPIs.baseUrl;
  }

  /**
   * Get courses with pagination and sorting
   * @param limit - Number of courses per page (default: 14)
   * @param page - Page number (default: 0)
   * @param sortBy - Sort field (default: 'CREATED_AT')
   * @returns Promise<AxiosResponse<any>>
   */
  getCourses = (
    limit: number = 14,
    page: number = 0,
    sortBy: string = 'CREATED_AT'
  ): Promise<AxiosResponse<any>> => {
    const params = new URLSearchParams({
      limit: limit.toString(),
      page: page.toString(),
      sort_by: sortBy
    });

    return axios.get<any>(`/api/course?${params.toString()}`);
  };

  /**
   * Get course playback intro video
   * @param courseId - The course ID
   * @returns Promise<AxiosResponse<any>>
   */
  getCourseIntroVideo = (courseId: string): Promise<AxiosResponse<any>> => {
    return axios.get<any>(`/api/course/${courseId}/intro`);
  };

  /**
   * Get lesson video data
   * @param courseId - The course ID
   * @param lessonId - The lesson ID
   * @returns Promise<AxiosResponse<any>>
   */
  getLessonVideo = (courseId: string, lessonId: string): Promise<AxiosResponse<any>> => {
    return axios.post<any>(`/api/course/${courseId}/lesson/${lessonId}`);
  };
}

export default CoursesAPIs;
