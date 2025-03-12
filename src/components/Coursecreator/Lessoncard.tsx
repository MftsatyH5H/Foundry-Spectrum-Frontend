import React, { Component } from 'react';
import { HiTrash } from "react-icons/hi2";

interface Lesson {
    id: number;
    title: string;
    content: {
        name: string;
        video: null | string;
        assets: null | string;
    };
}

interface LessoncardProps {
    lesson: Lesson;
    chapterId: number;
    deleteLesson: (chapterId: number, lessonId: number) => void;
    onSelect: () => void;
    isSelected: boolean;
}

class Lessoncard extends Component<LessoncardProps> {
    render() {
        const { lesson, chapterId, deleteLesson, onSelect, isSelected } = this.props;

        return (
            <div
                className={`py-[15px] px-[12px] border border-[#505075] rounded-[8px] ${isSelected ? 'bg-[#471F70] border-[#5F358A]' : '#140D21'}`}
                onClick={onSelect}
            >
                <div className='flex flex-row justify-between text-white'>
                    <h1 className='font-[Poppins] font-medium text-[16px] leading-[150%] text-white'>{lesson.title}</h1>
                    <button
                        className='text-[#C3C3D9]'
                        onClick={(e) => {
                            e.stopPropagation();
                            deleteLesson(chapterId, lesson.id);
                        }}
                    >
                        <HiTrash size={15} />
                    </button>
                </div>
            </div>
        );
    }
}

export default Lessoncard;