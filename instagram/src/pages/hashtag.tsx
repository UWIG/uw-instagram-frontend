import Photos from "../components/profile/photos";
import Skeleton from "react-loading-skeleton";
import axiosAPI from "../config/axiosConfig";
import { useEffect, useState, useContext } from "react";
import { postType } from "../components/post/postType";
import Sidebar from "../components/sidebar/sidebar";
import { useParams } from "react-router-dom";

export default function Hashtag() {
  const [loading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState<string>(
    "/images/avatars/default_avatar.jpg"
  );
  const [posts, setPosts] = useState<postType[]>([]);
  const { hashtag } = useParams();

  async function getHashtagPosts() {
    try {
      const response = await axiosAPI.get(`/hashtags/${hashtag}`);
      if (response.data !== null) {
        setAvatar(
          "data:image/png;base64, " + response.data[0].avatar.data.data
        );
        setPosts(response.data);
        setLoading(false);
        console.log(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getHashtagPosts();
  }, []);

  return (
    <div className="bg-gray-background h-full">
      <div className="grid grid-cols-5 gap-12 max-w-screen-2xl">
        <div className="col-span-1">
          <Sidebar onCreatePost={() => {}} />
        </div>
        <div className="container col-span-4 flex flex-col mt-10 ">
          <div className="grid grid-cols-4 gap-12 max-w-screen-2xl px-16">
            <div className="col-span-1">
              {loading ? (
                <Skeleton circle height={160} width={160} />
              ) : (
                <img
                  className="rounded-full h-40 w-40 flex cursor-pointer"
                  src={avatar}
                  alt="Hashtag"
                />
              )}
            </div>
            <div className="col-span-3">
              <p className="font-bold text-2xl">#{hashtag}</p>
              <p className="text-lg pt-2">
                {" "}
                <span className="font-bold">{posts.length}</span> posts
              </p>
              <div className="w-full pt-8">
                <button className="custom-background-blue text-white w-full rounded-lg h-8 font-bold">
                  Follow
                </button>
              </div>
            </div>
          </div>
          <Photos
                isUserSelf={false}
                posts={posts}
                onCreateComment={getHashtagPosts}
                onClickSave = {() => {}}
              />
        </div>
      </div>
    </div>
  );
}
