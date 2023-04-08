import axiosAPI from "../config/axiosConfig";
import { useEffect, useState, useContext } from "react";
import Header from "../components/profile/header";
import Photos from "../components/profile/photos";
import { postType } from "../components/post/postType";
import Sidebar from "../components/sidebar/sidebar";
import { useParams } from "react-router-dom";
import UserContext from "../contexts/user-context";
import { userType } from "./pageType";
import { tr } from "date-fns/locale";

export default function UserProfile(props: any) {
  const { username } = useParams();
  const [isUserSelf, setIsUserSelf] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [fullname, setFullname] = useState("");
  const [posts, setPosts] = useState<postType[]>([]);
  const [followers, setFollowers] = useState<userType[]>([]);
  const [following, setFollowing] = useState<userType[]>([]);
  const { user } = useContext(UserContext);
  const [postNum, setPostNum] = useState(0);

  async function getUserPosts() {
    try {
      const response = await axiosAPI.get(`/${username}`);
      if (response.data.avatar !== null)
        setAvatar("data:image/png;base64, " + response.data.avatar.data);
      else setAvatar("/images/avatars/default_avatar.jpg");
      setFullname(response.data.fullname);
      setPosts(response.data.posts);
      setPostNum(response.data.posts !== null ? response.data.posts.length : 0);
      setFollowers(response.data.followers);
      setFollowing(response.data.following);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function getSavedPosts() {
    await axiosAPI
      .get(`/api/save/${username}`)
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getUserPosts();
    if (user.username === username) {
      setIsUserSelf(true);
    }
  }, [username]);

  return (
    <>
      <div className="bg-gray-background h-full">
        <div className="grid grid-cols-5 gap-12 max-w-screen-2xl">
          <div className="col-span-1">
            <Sidebar onCreatePost={() => getUserPosts()} />
          </div>
          <div className="container col-span-4 flex flex-col">
            <Header
              isUserSelf={isUserSelf}
              postCount={postNum}
              username={username}
              avatar={avatar}
              fullname={fullname}
              setAvatar={setAvatar}
              followers={followers}
              following={following}
            />
            <Photos
              isUserSelf={isUserSelf}
              isProfilePage={true}
              posts={posts}
              onCreateComment={getUserPosts}
              onClickSave = {() => getSavedPosts()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
