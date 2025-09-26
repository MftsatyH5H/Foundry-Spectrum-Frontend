import React from 'react'

interface VideoData {
  otp: string;
  playbackInfo: string;
}

interface CourseVideoPlayerProps {
  videoData?: VideoData | null;
  isLoading?: boolean;
}

function CourseVideoPlayer({ videoData, isLoading }: CourseVideoPlayerProps) {
  if (isLoading) {
    return (
      <div className='w-full h-[600px] flex items-center justify-center'>
        <div className='text-white text-lg'>Loading lesson...</div>
      </div>
    );
  }

  if (!videoData) {
    return (
      <div className='w-full h-[600px] flex items-center justify-center'>
        <div className='text-white text-lg'>Select a lesson to start watching</div>
      </div>
    );
  }

  return (
    <div className='w-full h-[600px]'>
        <iframe 
            className='w-full h-full'
            src={`https://player.vdocipher.com/v2/?otp=${videoData.otp}&playbackInfo=${videoData.playbackInfo}`}
            allowFullScreen={true} 
            allow="encrypted-media"
            style={{ aspectRatio: '16/9' }}
        />
    </div>
  )
}

export default CourseVideoPlayer