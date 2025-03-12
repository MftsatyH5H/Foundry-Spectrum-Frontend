import React, { useState } from 'react';
import Chaptercard from './Chaptercard';
import Lessoncard from './Lessoncard';
import LessonContent from './LessonContent';
import { AiFillExclamationCircle } from "react-icons/ai";

interface Lesson {
    id: number;
    title: string;
    content: {
        name: string;
        video: null | string;
        assets: null | string;
    };
}

interface Chapter {
    id: number;
    name: string;
    title: string;
    description: string;
    lessons: Lesson[];
}

const CoursecreateStep3: React.FC = () => {
    const [chapters, setChapters] = useState<Chapter[]>([]);
    const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
    const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);

    const addChapter = () => {
        const newChapter: Chapter = {
            id: Date.now(),
            name: `Chapter ${chapters.length + 1}`,
            title: '',
            description: '',
            lessons: []
        };
        setChapters([...chapters, newChapter]);
    };

    const addLesson = (chapterId: number) => {
        setChapters(chapters.map(chapter => {
            if (chapter.id === chapterId) {
                return {
                    ...chapter,
                    lessons: [...chapter.lessons, {
                        id: Date.now(),
                        title: `Lesson ${chapter.lessons.length + 1}`,
                        content: {
                            name: `Lesson ${chapter.lessons.length + 1}`,
                            video: null,
                            assets: null
                        }
                    }]
                };
            }
            return chapter;
        }));
    };

    const deleteChapter = (chapterId: number) => {
        const updatedChapters = chapters.filter(chapter => chapter.id !== chapterId);
        const renamedChapters = updatedChapters.map((chapter, index) => ({
            ...chapter,
            name: `Chapter ${index + 1}`
        }));
        setChapters(renamedChapters);

        if (selectedChapterId === chapterId) {
            setSelectedChapterId(null);
        }
    };

    const deleteLesson = (chapterId: number, lessonId: number) => {
        setChapters(chapters.map(chapter => {
            if (chapter.id === chapterId) {
                const updatedLessons = chapter.lessons.filter(lesson => lesson.id !== lessonId);
                const renamedLessons = updatedLessons.map((lesson, index) => ({
                    ...lesson,
                    title: `Lesson ${index + 1}`
                }));
                return {
                    ...chapter,
                    lessons: renamedLessons
                };
            }
            return chapter;
        }));
    };

    const updateLessonContent = (chapterId: number, lessonId: number, newContent: Partial<Lesson['content']>) => {
        setChapters(chapters.map(chapter => {
            if (chapter.id === chapterId) {
                return {
                    ...chapter,
                    lessons: chapter.lessons.map(lesson => {
                        if (lesson.id === lessonId) {
                            return {
                                ...lesson,
                                content: {
                                    ...lesson.content,
                                    ...newContent
                                }
                            };
                        }
                        return lesson;
                    })
                };
            }
            return chapter;
        }));
    };

    // Add this function to update chapter details
    const updateChapter = (chapterId: number, updatedData: { title: string; description: string }) => {
        setChapters(chapters.map(chapter => {
            if (chapter.id === chapterId) {
                return {
                    ...chapter,
                    title: updatedData.title,
                    description: updatedData.description
                };
            }
            return chapter;
        }));
    };

    const selectedChapter = chapters.find(chapter => chapter.id === selectedChapterId);
    const selectedLesson = selectedChapter?.lessons.find(lesson => lesson.id === selectedLessonId);

    return (
        <div className='bg-[#140D21] rounded-[12px]'>
            <div className='flex flex-row'>
                <div className='min-w-[360px] min-h-[800px] overflow-auto flex flex-col border border-r-[#291A42] border-transparent'>
                    <div className='font-[Poppins] text-[12px] font-normal text-[#F5FFAC] leading-[18px] py-[16px] px-[12px] flex flex-row gap-[16px] border border-b-[#291A42] border-transparent'>
                        <div className='flex justify-center items-center'>
                            <AiFillExclamationCircle size={24} />
                        </div>
                        <h1>Now you can add all course material and can save and come back any time</h1>
                    </div>
                    <div>
                        {chapters.map(chapter => (
                            <Chaptercard
                                key={chapter.id}
                                chapter={chapter}
                                deleteChapter={deleteChapter}
                                updateChapter={updateChapter} // Pass the updateChapter function
                                onSelect={() => setSelectedChapterId(chapter.id)}
                                isSelected={selectedChapterId === chapter.id}
                            />
                        ))}
                    </div>
                    <div className='p-[24px] text-[14px] font-[Poppins] font-medium text-[#E1FF00] border border-t-[#291A42] border-transparent'>
                        <button className='bg-[#332052] py-[20px] px-[20px] w-full rounded-lg' onClick={addChapter}>+ Add Chapter</button>
                    </div>
                </div>
                <div className='min-w-[360px] min-h-[800px] overflow-auto flex flex-col'>
                    <div className='font-[Poppins] text-[16px] font-normal text-white leading-[150%] px-[12px] py-[24px]'>
                        <h1>{selectedChapter ? selectedChapter.name + " Content" : 'Select a Chapter'}</h1>
                    </div>
                    <div className='border border-t-[#291A42] border-transparent px-[12px] py-[24px] flex flex-col gap-[24px]'>
                        {selectedChapter ? (
                            selectedChapter.lessons.map(lesson => (
                                <Lessoncard
                                    key={lesson.id}
                                    lesson={lesson}
                                    chapterId={selectedChapter.id}
                                    deleteLesson={deleteLesson}
                                    onSelect={() => setSelectedLessonId(lesson.id)}
                                    isSelected={selectedLessonId === lesson.id}
                                />
                            ))
                        ) : (
                            <p className='text-[#AFAFC7] text-[14px] font-[Poppins] leading-[150%] font-light'>
                                No chapter selected.
                            </p>
                        )}
                    </div>
                    <div className='p-[24px] text-underline text-[14px] font-[Poppins] font-normal text-white flex flex-row justify-around'>
                        <button
                            className='bg-[#332052] rounded-lg text-foundryyellow px-5 py-2.5'
                            onClick={() => selectedChapter && addLesson(selectedChapter.id)}
                        >
                            + Add lesson
                        </button>
                        <button className='bg-[#332052] rounded-lg text-foundryyellow px-5 py-2.5'>+ Add quiz</button>
                    </div>
                </div>
                <div className='min-h-[800px] overflow-auto min-w-[600px] flex flex-col border border-l-[#291A42] border-r-[#291A42] border-transparent'>
                    <div className='border border-b-[#291A42] border-transparent font-[Poppins] text-[14px] font-normal text-[#AFAFC7] leading-[150%] mb-[20px] py-[24px] px-[12px]'>
                        <h1 className=''>
                            {selectedChapter && selectedLesson ? `${selectedChapter.name} > ${selectedLesson.title}` : 'Select a Lesson'}
                        </h1>
                    </div>
                    <div className='p-[24px]'>
                        {selectedLesson ? (
                            <LessonContent
                                lesson={selectedLesson}
                                updateLessonContent={(newContent) => updateLessonContent(selectedChapter.id, selectedLesson.id, newContent)}
                            />
                        ) : (
                            <p className='text-[#AFAFC7] text-[14px] font-[Poppins] leading-[150%] font-light'>
                                No lesson selected.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursecreateStep3;