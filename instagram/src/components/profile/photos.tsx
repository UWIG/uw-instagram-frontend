/* eslint-disable no-nested-ternary */
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { postType, postImage } from "../post/postType";
import PostModal from "../post/modal";

export default function Photos({
  isUserSelf,
  posts,
  onCreateComment
}: {
  isUserSelf: boolean;
  posts: postType[],
  onCreateComment: () => {};
}) {
  // var photos: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [open, setOpen] = useState(false);

  return (
    <div className="h-16 border-t border-gray-primary mt-12 pt-4">
      <div className="flex items-center justify-center flex-row">
        <div className="flex items-center justify-center flex-row cursor-pointer">
          <svg
            aria-label=""
            color="rgb(38, 38, 38)"
            fill="rgb(38, 38, 38)"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <rect
              fill="none"
              height="18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              width="18"
              x="3"
              y="3"
            ></rect>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="9.015"
              x2="9.015"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="14.985"
              x2="14.985"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="9.015"
              y2="9.015"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="14.985"
              y2="14.985"
            ></line>
          </svg>
          <span className="mr-10">POSTS</span>
        </div>
        <div className="flex items-center justify-center flex-row cursor-pointer">
          {isUserSelf ? (
            <>
              <svg
                aria-label=""
                color="rgb(142, 142, 142)"
                fill="rgb(142, 142, 142)"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polygon>
              </svg>
              <span className="mr-10">SAVED</span>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center justify-center flex-row cursor-pointer">
          <svg
            aria-label=""
            color="rgb(142, 142, 142)"
            fill="rgb(142, 142, 142)"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <path
              d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <circle
              cx="12.072"
              cy="11.075"
              fill="none"
              r="3.556"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
          </svg>
          <span>TAGGED</span>
        </div>
      </div>
      <div className="">
        {posts.length == 0 ?
        <div className="w-full text-center font-bold pt-32">
          <p>Share Photos</p>
        </div>
        :
        <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
          {posts.map((post) => (
            <div key={post.id}>
              <PostModal
                id={post.id}
                open={open}
                username={post.username}
                caption={post.caption}
                likes={post.likes}
                avatar={post.avatar}
                time_created={post.time_created}
                comments={post.comments}
                mediaList={post.mediaList}
                onClose={() => setOpen(false)}
                onCreateComment={onCreateComment}
                opacity="bg-opacity-25"
              />
              <div className="relative group" onClick={() => setOpen(true)}>
                <img
                  src={"data:image/png;base64," + post.mediaList[0].data.data}
                  alt="profile pic"
                />

                <div className="absolute bottom-0 left-0  z-10 w-full justify-evenly items-center h-full bg-neutral-800/50 group-hover:flex hidden">
                  <p className="flex items-center text-white font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-8 mr-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {post.likes}
                  </p>

                  <p className="flex items-center text-white font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-8 mr-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {post.comments?.length}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        }
      </div>
    </div>
  );
}
// Photos.propTypes = {
//   photos: PropTypes.array,
// };
