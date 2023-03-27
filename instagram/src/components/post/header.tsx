import React from "react";
import { postHeader } from "./postType";
import { formatDistanceToNowStrict } from "date-fns";
import Skeleton from "react-loading-skeleton";

export default function Header(props: postHeader) {
  const imgsrc =
    props.avatar === undefined
      ? "/images/avatars/default_avatar.jpg"
      : "data:image/png;base64, " + props.avatar.data.data;
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <img className="rounded-full h-8 w-8 flex wr-3" src={imgsrc} alt="" />
        <p className="text-sm font-bold ml-3">
          {props.username || <Skeleton />}
        </p>
        <span className="text-sm text-gray-base ml-3">
          {formatDistanceToNowStrict(new Date(props.time_created))}
        </span>
        <span className="text-sm font-bold text-blue-medium ml-3 custom-blue">
          Follow
        </span>
      </div>
    </div>
  );
}
