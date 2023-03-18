import React from 'react'
import { postModalComment } from './postType'
import { formatDistanceToNowStrict } from 'date-fns'

export default function ModalComment(props: postModalComment) {
  const imgsrc =  props.avatar === undefined ? "/images/avatars/default_avatar.jpg" :"data:image/png;base64, " + props.avatar.data.data;

  return (
    <div className="p-4 py-8 h-4/5 overflow-y-auto">
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
        const commentAvatar = comment.avatar === undefined ? "/images/avatars/default_avatar.jpg" :"data:image/png;base64, " + comment.avatar.data.data
        return (
          <div className="items-center mt-8 flex">
            <img className="rounded-full h-8 w-8 wr-3" src={commentAvatar} alt="" />
            <div>
              <p>
                <span className="text-sm font-bold ml-3">{comment.username}</span>
                <span className="text-sm ml-3">{comment.comment}</span>
              </p>
              <p >
                <span className="text-xs text-gray ml-3" >{formatDistanceToNowStrict(new Date(comment.time_created))}</span>
                <span className="text-xs ml-3 text-gray font-bold">0 likes</span>
                <span className="text-xs ml-3 text-gray font-bold">Reply</span>

              </p>
            </div>
            {/* <span className="text-sm font-bold text-blue-medium ml-3">Follow</span> */}
          </div>
        );
      })}
    </div>
  )
}