interface studentGallery {
    imageSrc: string;
    name: string;
    profilePicture?: string;
}
interface studentGalleryList {
    studentsGallery: studentGallery[]
}

export type { studentGallery, studentGalleryList };