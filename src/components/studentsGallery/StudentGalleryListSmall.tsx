import React from 'react'
import StudentGallery from './studentGallery'

function StudentGalleryListSmall() {
  return (
    <div className="grid w-full gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-auto">
    <StudentGallery name="Ahmed Sayed" imageSrc="testimage4.png" className="row-span-1" />
    <StudentGallery name="Mohamed Alaa" imageSrc="testimage3.png" />
    <StudentGallery name="Karim Yasser" imageSrc="testimage3.png" className="row-span-2" />
    <StudentGallery name="Ahmed Sayed" imageSrc="testimage3.png" />
    <StudentGallery name="Ahmed Sayed" imageSrc="testimage3.png" />
    <StudentGallery name="Ahmed Sayed" imageSrc="testimage2.png" />
    <StudentGallery name="Karim Yasser" imageSrc="testimage2.png" />
    <StudentGallery name="Ahmed Sayed" imageSrc="testimage3.png" />
</div>
  )
}

export default StudentGalleryListSmall