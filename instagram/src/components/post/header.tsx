import { useContext, useState } from "react";
import { postHeader } from "./postType";
import { formatDistanceToNowStrict } from "date-fns";
import Skeleton from "react-loading-skeleton";
import axiosAPI from "../../config/axiosConfig";
import UserContext from "../../contexts/user-context";
import ModalDelete from "./modal-delete";
export default function Header(props: postHeader) {
  const { user } = useContext(UserContext);
  const [followed, setFollowed] = useState(props.whether_followed_post_user);
  const [open, setOpen] = useState(false);
  const imgsrc =
    props.avatar === null
      ? "/images/avatars/default_avatar.jpg"
      : "data:image/png;base64, " + props.avatar.data;

  const handleFollowClicked = async () => {
    const setFollowPair = {
      currentUserName: user.username,
      targetUserName: props.username,
    };
    await axiosAPI
      .post("setFollow", setFollowPair)
      .then(function (response) {
        let res = response.data;
        console.log("result of setFollow: " + res);
        if (res === "successful") {
          setFollowed(true);
        }
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  return (
    <div className="flex justify-between border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <img className="rounded-full h-8 w-8 flex wr-3" src={imgsrc} alt="" />
        <p className="text-sm font-bold ml-3">
          {props.username || <Skeleton />}
        </p>
        <span className="text-sm text-gray-base ml-3">
          {formatDistanceToNowStrict(new Date(props.time_created))}
        </span>
        {!followed && props.username !== user.username && (
          <span
            className="text-sm font-bold text-blue-medium ml-3 custom-blue cursor-pointer"
            onClick={handleFollowClicked}
          >
            Follow
          </span>
        )}
      </div>
      <div className="items-center flex ">
        {props.deleteButton && (
          <> 
          <span
            className="items-center cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <svg
              aria-label="More options"
              className=""
              color="rgb(142, 142, 142)"
              fill="rgb(142, 142, 142)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </span>
          {props.post_id !== undefined && props.onDelete !== undefined && <ModalDelete open={open} setOpen={setOpen} post_id={props.post_id} onDelete={props.onDelete} onClose={props.onClose}/>}
          </>
        )}
      </div>
    </div>
  );
}
