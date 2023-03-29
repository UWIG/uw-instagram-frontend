import React,{useContext, useState} from "react";
import { postHeader } from "./postType";
import { formatDistanceToNowStrict } from "date-fns";
import Skeleton from "react-loading-skeleton";
import axiosAPI from "../../config/axiosConfig";
import UserContext from "../../contexts/user-context";
export default function Header(props: postHeader) {
  const {user} = useContext(UserContext);
  const [followed, setFollowed] = useState(props.whether_followed_post_user);
  const imgsrc =
    props.avatar === undefined
      ? "/images/avatars/default_avatar.jpg"
      : "data:image/png;base64, " + props.avatar.data.data;

    const handleFollowClicked= async ()=>{
        const setFollowPair = {currentUserName:user.username,targetUserName:props.username}; 
        await axiosAPI.post("setFollow",setFollowPair)
        .then(function(response){
            let res = response.data;
            console.log("result of setFollow: "+res);
            if(res === "successful"){
                setFollowed(true);
            }
        })
        .catch(function(err){
            console.error(err);
        }); 
    };
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
        {!followed && <span className="text-sm font-bold text-blue-medium ml-3 custom-blue cursor-pointer" onClick={handleFollowClicked}>
          Follow
        </span>}
      </div>
    </div>
  );
}
