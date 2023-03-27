import React, { useState } from 'react'
import { postImage } from './postType'
import Modal from './modal';

export default function Image(props: postImage){
  const [imgIdx, setImgIdx] = useState(0);
  const img = props.mediaList[imgIdx].data.data;

  return (
    <div className='relative bg-black pb-[75%]'>
        <img className='absolute h-full w-full object-cover' src={'data:image/png;base64,' + img} alt={props.caption}/>
        {imgIdx > 0 &&  <button className='absolute top-1/2 left-[5%] text-sm text-white cursor-pointer bg-[#1a1a1acc]  rounded-full px-2 py-0.5 font-bold' 
        onClick={() => {setImgIdx(imgIdx - 1)}}>&#10094;</button>}
        {imgIdx < props.mediaList.length - 1 && <button className='absolute top-1/2 right-[5%] text-sm text-white text-white cursor-pointer bg-[#1a1a1acc]  rounded-full px-2 py-0.5 font-bold'
        onClick={() => {setImgIdx(imgIdx + 1)}}>&#10095;</button>}
    </div>
  )
}
