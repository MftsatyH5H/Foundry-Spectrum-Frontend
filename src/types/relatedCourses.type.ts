//Unsure about student level, need to check with karim.
interface RelatedCourses {
    title: string;
    level: string;
    languages: string[];
    mainTopic: string;
}
interface RelatedCoursesList {
    relatedCourses: RelatedCourses[]
}
export type { RelatedCourses, RelatedCoursesList };