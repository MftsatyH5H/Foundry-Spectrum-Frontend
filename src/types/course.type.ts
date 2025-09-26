interface Language {
    name: string;
    content: string;
}

interface Category {
    id: number;
    name: string;
    description: string;
}

interface Tool {
    id: number;
    name: string;
    description: string;
}

interface Lesson {
    id: number;
    title: string;
    description: string;
    content: string;
    type: string;
    vdo_video_id: string;
    order_index: number;
    is_free_preview: boolean;
}

interface Chapter {
    id: number;
    title: string;
    description: string;
    lessons: Lesson[];
    vdo_sub_folder_id: string;
    order_index: number;
}

interface Instructor {
    id: string;
    firstName: string;
    lastName: string;
    profession: string;
}

interface Course {
    id: string;
    title: string;
    description: string;
    overview: string;
    outcome: string;
    requirements: string;
    price: number;
    languages: Language[];
    categories: Category[];
    chapters: Chapter[];
    tools: Tool[];
    instructors: Instructor[];
    difficulty: string;
    status: string;
    accessLevel: string;
    vdo_folder_id: string;
    tax_percentage: number;
    discount_percentage: number;
    is_free: boolean;
    duration_mins: number;
    thumbnail_url: string;
    materials_url: string;
}

interface CoursesResponse {
    data: Course[];
    currentPage: number;
    totalPages: number;
    totalElements: number;
    pageSize: number;
    first: boolean;
    last: boolean;
    hasNext: boolean;
    hasPrevious: boolean;
    sortBy: string;
    sortDirection: string;
}

export type { Course, CoursesResponse, Language, Category, Tool, Lesson, Chapter, Instructor };