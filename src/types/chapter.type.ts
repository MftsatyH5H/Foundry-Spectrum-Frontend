interface chapter {
    length: Date | string;
    title: string;
    lessons: lesson[]
}
interface lesson {
    type: lessonType
}
enum lessonType {
    video = 'video',
    quiz = 'quiz',
    reading= 'reading'
}
export type { chapter, lesson, lessonType };