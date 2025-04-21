import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userType } from "../../static/userType.enum";
import axios from "axios";
import { selectedCourseAPIs, UserAPIs } from "../../api";
import { chapter } from "../../types/chapter.type";
import { studentGalleryList, TestimonialList } from "../../types";
type selectedCourseType = {
  id: string,
  name: string,
  //ask khalid
  category: string[],
  tags: string[],
  description: string,
  price: number,
  author: string,
  learningOutcome: string[],
  startDate: Date | string,
  duration: string,
  level:string,
  languages: string[],
  rating: number,
  studentsEnrolled: number[],
  qA: string[],
  lectureType: string[],
  courseFor: string,
  chapters: chapter[],
  testimonials: TestimonialList,
  studentGallary: studentGalleryList
}
const selectedCourseInitType: selectedCourseType = {
  id: '',
  name: '',
  category: [],
  tags: [],
  description: '',
  price: 0,
  author: '',
  learningOutcome: [],
  startDate: '', // or new Date()
  duration: '',
  level: '',
  languages: [],
  rating: 0,
  studentsEnrolled: [],
  qA: [],
  lectureType: [],
  courseFor: '',
  chapters: [],
  testimonials: {testimonials: []}, 
  studentGallary: {studentsGallery:[]}
};
const courseAPIs = new selectedCourseAPIs();
export const fetchSelectedCourseData = createAsyncThunk(
  "selectedCourse/fetchSelectedCourseData",
  async (courseId: string) => {
    const response = await courseAPIs.getCourseByIdApi(courseId);
    return response.data;
  }
);
const selectedCourse = createSlice({
  name: "selectedCourse",
  initialState: selectedCourseInitType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSelectedCourseData.fulfilled, (state, action) => {
      state = action.payload
    });
  }
});

export default selectedCourse.reducer;