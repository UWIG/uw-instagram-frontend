import React from "react";
import { useState,useEffect } from "react";
import UserModal from "./userModal";
import AvatarModal from "./avatarModal";
import axios from "axios";

export default function UserProfile({
  isUserSelf,
  postCount,
  username
}: {
  isUserSelf: boolean;
  postCount: number;
  username: string
}) {
  const [isAvatarOpen, setAvatarOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getAvatar();
  }, []);
  
  async function getAvatar() {
    const formData = new FormData();
    formData.append("username",username);
    await axios({
      method:"post",
      url:"http://www.localhost:8080/user/getAva",
      data:formData,
      headers:{ "Content-Type": "multipart/form-data" }
    }).then((res)=>{
      console.log(res);
      setAvatar(res.data.res.data.data)
    })
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <div className="container flex justify-center items-center">
          <img
            className="rounded-full h-40 w-40 flex cursor-pointer"
            src={'data:image/png;base64,' + avatar}
            alt="profile pic"
            onClick={()=>setAvatarOpen(true)}
          />
        </div>
        <div className="flex items-center justify-center flex-col col-span-2">
          <div className="container flex items-center">
            <p className="text-2xl mr-4">{username}</p>
            {isUserSelf ? (
              <>
                <button
                  className=" bg-gray-100 font-bold text-sm rounded w-28 h-8"
                  type="button"
                >
                  Edit Profile
                </button>
                <svg
                  aria-label="Options"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                  className="ml-2 cursor-pointer"
                  onClick={() => setUserOpen(true)}
                >
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </>
            ) : (
              <>
                <button
                  className=" bg-gray-100 font-bold text-sm rounded w-20 h-8"
                  type="button"
                >
                  Follow
                </button>
                <button
                  className=" bg-gray-100 font-bold text-sm rounded w-20 h-8 ml-2"
                  type="button"
                >
                  Message
                </button>
                <svg
                  aria-label="Options"
                  color="#262626"
                  fill="#262626"
                  height="32"
                  role="img"
                  viewBox="0 0 24 24"
                  width="32"
                  className="ml-2 cursor-pointer"
                  onClick={() => setUserOpen(true)}
                >
                  <circle cx="12" cy="12" r="1.5"></circle>
                  <circle cx="6" cy="12" r="1.5"></circle>
                  <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
              </>
            )}
          </div>
          <div className="container flex mt-4">
            <p className="mr-10">
              <span className="font-bold">{postCount}</span> posts
            </p>
            <p className="mr-10 cursor-pointer">
              <span className="font-bold">followerCount</span>
              {` `}
              {/* {followerCount === 1 ? `follower` : `followers`} */}
              follower
            </p>
            <p className="mr-10 cursor-pointer">
              <span className="font-bold">following num</span> following
            </p>
          </div>
          <div className="container mt-4">
            <p className="font-medium">fullName</p>
          </div>
        </div>
      </div>
      <UserModal
        isOpen={isUserOpen}
        isUserSelf={isUserSelf}
        username={username}
        onClose={() => setUserOpen(false)}
      ></UserModal>
      <AvatarModal
        isOpen={isAvatarOpen}
        isUserSelf={isUserSelf}
        username={username}
        onClose={() => setAvatarOpen(false)}
        getAvatar={()=>getAvatar()}
      ></AvatarModal>
    </>
  );
}
