import React, { useState, useRef, useEffect } from 'react'
import { formatDistanceToNowStrict } from 'date-fns'
import { postModalComments } from './postType'
import ModalComment from './modal-comment';
import { useNavigate } from 'react-router-dom';

export default function ModalComments(props: postModalComments) {
  const navigate = useNavigate();
  const texts = props.caption.split(/#\p{L}+/gu);
  const hashtags = props.caption.match(/#\p{L}+/gu);

  const handleHashtag = (e: any) => {
    navigate("/hashtags/" + e.target.innerText.slice(1));
  };

  const caption =
    texts === null ? (
      ""
    ) : (
      <>
        {texts.map((text, idx) => (
          <span key={idx}>
            <span>{text}</span>
            {hashtags && <span className="hashtag cursor-pointer" onClick={handleHashtag}>{hashtags[idx]}</span>}
          </span>
        ))}
      </>
    );

  const imgsrc = props.avatar === null ? "/images/avatars/default_avatar.jpg" : "data:image/png;base64, " + props.avatar.data;

  return (
    <div className="p-4 py-8 h-[95%] overflow-y-auto">
      <div className="flex items-center">
        <img className="rounded-full h-8 w-8 flex wr-3" src={imgsrc} alt="" />
        <div>
          <p>
            <span className="text-sm font-bold ml-3">{props.username}</span>
            <span className="text-sm ml-3">{caption}</span>
          </p>
          <p><span className="text-xs text-gray ml-3" >{formatDistanceToNowStrict(new Date(props.time_created))}</span></p>
        </div>

        {/* <span className="text-sm text-gray-base ml-3">{formatDistanceToNowStrict(new Date(props.postDate))}</span> */}
        {/* <span className="text-sm font-bold text-blue-medium ml-3">Follow</span> */}
      </div>
      {props.comments && props.comments.map((comment) => {
            return <ModalComment key={comment.id} comment={comment} setReplyUser={props.setReplyUser} setCommentId={props.setCommentId} />
      })}
    </div>
  )
}