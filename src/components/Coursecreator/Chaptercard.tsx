import React, { Component } from 'react';
import { HiTrash } from "react-icons/hi2";
import { BiSolidEditAlt } from "react-icons/bi";

interface Chapter {
    id: number;
    name: string;
    title: string;
    description: string;
}

interface ChaptercardProps {
    chapter: Chapter;
    deleteChapter: (chapterId: number) => void;
    updateChapter: (chapterId: number, updatedData: { title: string; description: string }) => void;
    onSelect: () => void;
    isSelected: boolean;
}

interface ChaptercardState {
    isEditing: boolean;
    title: string;
    description: string;
}

class Chaptercard extends Component<ChaptercardProps, ChaptercardState> {
    constructor(props: ChaptercardProps) {
        super(props);
        this.state = {
            isEditing: false,
            title: props.chapter.title,
            description: props.chapter.description
        };
    }

    // Handle input changes
    handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<ChaptercardState, keyof ChaptercardState>);
    };

    // Save changes
    handleSave = () => {
        const { chapter, updateChapter } = this.props;
        const { title, description } = this.state;

        updateChapter(chapter.id, { title, description });

        this.setState({ isEditing: false });
    };

    // Cancel editing
    handleCancel = () => {
        this.setState({
            isEditing: false,
            title: this.props.chapter.title,
            description: this.props.chapter.description
        });
    };

    render() {
        const { chapter, deleteChapter, onSelect, isSelected } = this.props;
        const { isEditing, title, description } = this.state;

        return (
            <div
                className={`w-full flex flex-col p-[15px] ${isSelected ? 'bg-[#291A42]' : 'bg-transparent'}`}
                onClick={onSelect}
            >
                <div className='flex flex-row justify-between text-white items-center'>
                    <h1 className='font-[agrandir] font-normal text-[20px] leading-[30px]'>{chapter.name}</h1>
                    <div className='text-[12px] font-[Poppins] font-medium leading-[18px] text-[#E1FF00] flex flex-row'>
                        {!isEditing ? (
                            <>
                                <button
                                    className='mr-[12px] bg-[#332052] px-2 py-3 rounded-lg  flex flex-row items-center justify-center gap-2'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteChapter(chapter.id);
                                    }}
                                >
                                    <HiTrash size={12} />
                                    Remove
                                </button>
                                <button
                                    className=' bg-[#332052] px-2 py-3 rounded-lg  flex flex-row items-center justify-center gap-2'
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent event bubbling
                                        this.setState({ isEditing: true }); // Enter edit mode
                                    }}
                                >
                                    <BiSolidEditAlt size={12} />
                                    Edit
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className='bg-[#332052] px-2 py-3 rounded-lg  flex flex-row items-center justify-center gap-2 mr-[24px]'
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent event bubbling
                                        this.handleSave(); // Save changes
                                    }}
                                >
                                    Save
                                </button>
                                <button
                                    className='bg-[#332052] px-2 py-3 rounded-lg  flex flex-row items-center justify-center gap-2'
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent event bubbling
                                        this.handleCancel(); // Cancel editing
                                    }}
                                >
                                    Cancel
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className='mt-[15px]'>
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                name="title"
                                value={title}
                                onChange={this.handleInputChange}
                                className="w-full p-2  text-white mb-[8px] break-words bg-[#2F2F4F] rounded-[8px] border border-[#505075]"
                                placeholder="Enter title"
                            />
                            <textarea
                                name="description"
                                value={description}
                                onChange={this.handleInputChange}
                                className="w-full p-2 text-white break-words bg-[#2F2F4F] rounded-[8px] border border-[#505075]"
                                placeholder="Enter description"
                            />
                        </>
                    ) : (
                        <>
                            <h1 className='text-[18px] font-[Poppins] font-bold leading-[22px] text-white break-words mb-[8px]'>{title}</h1>
                            <p className='text-[#909090] text-[12px] font-[Poppins] leading-[14.5px] font-light break-words'>{description}</p>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

export default Chaptercard;