import React from 'react'
import { postComments, postComment } from './postType'
import { formatDistanceToNowStrict } from 'date-fns'

export default function Comments(props:postComments) {
  return (
    <div className="p-4 pt-1 pb-4">
      <p className="text-sm text-gray-base mb-1 cursor-pointer">View all comments</p>
      {props.comments && props.comments.map((comment:postComment, inx) => {
        console.log(comment);
        if(inx < 3){
        return (
          <div>
              <p key={comment.id.date} className='mb-1'>
                  <span className='mr-1 font-bold'>{comment.username}</span>
                  <span>{comment.comment}</span>
              </p>
          </div>
        )
 
        }
      })}
    </div>
  )
}
