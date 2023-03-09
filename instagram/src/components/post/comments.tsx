import React from 'react'
import { postComments, postComment } from './postType'

export default function Comments(props:postComments) {
  return (
    <div className="p-4 pt-1 pb-4">
      <p className="text-sm text-gray-base mb-1 cursor-pointer">View all comments</p>
      {props.comments && props.comments.map((comment:postComment, inx) => {
        if(inx < 3){
        return <p key={comment.id.date} className='mb-1'>
                  <span className='mr-1 font-bold'>{"conner"}</span>
                  <span>{comment.comment}</span>
              </p>
        }
      })}
    </div>
  )
}
