import React, { useState } from 'react'
import { formatDistanceToNowStrict } from 'date-fns'
import { postModalComments } from './postType'
import ModalComment from './modal-comment';

export default function ModalComments(props: postModalComments) {

  const imgsrc = props.avatar === undefined ? "/images/avatars/default_avatar.jpg" : "data:image/png;base64, " + props.avatar.data.data;

  return (
    <div className="p-4 py-8 h-[95%] overflow-y-auto">
      <div className="flex items-center">
        <img className="rounded-full h-8 w-8 flex wr-3" src={imgsrc} alt="" />
        <div>
          <p>
            <span className="text-sm font-bold ml-3">{props.username}</span>
            <span className="text-sm ml-3">{props.caption}</span>
          </p>
          <p><span className="text-xs text-gray ml-3" >{formatDistanceToNowStrict(new Date(props.time_created))}</span></p>
        </div>

        {/* <span className="text-sm text-gray-base ml-3">{formatDistanceToNowStrict(new Date(props.postDate))}</span> */}
        {/* <span className="text-sm font-bold text-blue-medium ml-3">Follow</span> */}
      </div>
      {props.comments && props.comments.map((comment) => {
            return <ModalComment comment={comment}/>
      })}
    </div>
  )
}