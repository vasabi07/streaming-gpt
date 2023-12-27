import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen h-[40%] aspect-video bg-gradient-to-r from-black absolute text-white p-10 py-[30%]'>
        <h1 className='py-2 w-1/2 text-3xl font-bold'>{title}</h1>
        <h4 className='w-1/4'>{overview}</h4>
    </div>
  )
}

export default VideoTitle