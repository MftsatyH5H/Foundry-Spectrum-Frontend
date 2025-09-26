import React from 'react'

function CourseVideoPlayer() {
  return (
    <div className='w-full h-screen'>
        <iframe 
            className='w-full h-full'
            src="https://player.vdocipher.com/v2/?otp=20160313versUSE32301RSqa00GFqnbZzyhz4ZpN1w6hUwJMTJuGlbVuzvD7BqMJ2&playbackInfo=eyJ2aWRlb0lkIjoiNGZjODZlZTBmMjBjNGNhMDg4YmZjMzhlNGU2OWFkNmQifQ==" 
            allowFullScreen={true} 
            allow="encrypted-media"
            style={{ aspectRatio: '16/9' }}
        />
    </div>
  )
}

export default CourseVideoPlayer