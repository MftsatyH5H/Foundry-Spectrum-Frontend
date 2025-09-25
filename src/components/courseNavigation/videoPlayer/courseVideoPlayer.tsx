import React from 'react'

function CourseVideoPlayer() {
  return (
    <div className='w-full h-screen'>
        <iframe 
            className='w-full h-full'
            src="https://player.vdocipher.com/v2/?otp=20160313versUSE3232XN9RdCQFRoSY0JPP1Sw0Mk4iJ8Njhp0bLnmOWy0fgLPl2&playbackInfo=eyJ2aWRlb0lkIjoiZjZmYzgxMTI5ODAxNGU5MmFmOGI5NmE4Mzc1ZGFmYTEifQ==" 
            allowFullScreen={true} 
            allow="encrypted-media"
            style={{ aspectRatio: '16/9' }}
        />
    </div>
  )
}

export default CourseVideoPlayer