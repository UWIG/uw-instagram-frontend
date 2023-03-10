import { lazy, useReducer, useEffect, useState, useContext } from "react";
import { Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/profile/header";
import Photos from "../components/profile/photos";
import { postType } from "../components/post/postType";
import Sidebar from "../components/sidebar/sidebar";
import * as ROUTES from "../constants/routes";
import UserContext from "../contexts/user-context";

export default function Profile(props: any) {
  // let isUserSelf:boolean = false;
  const [isUserSelf, setIsUserSelf] = useState(false);
  const [posts, setPosts] = useState<postType[]>([]);
  const navigate = useNavigate();
  const { username } = useContext(UserContext);
  let userid = "6406a22e3ec1592d94f1f2f4";

  useEffect(() => {
    if (username === "") {
      navigate(ROUTES.LOGIN);
    } else {
      getPosts();
    }
    // getPosts();
  }, []);

  async function getPosts() {
    try {
      await axios
        .get(`http://www.localhost:8080/api/posts/${username}`)
        .then((res) => {
          setPosts(res.data);
          console.log(res.data);
        });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="bg-gray-background">
        <div className="grid grid-cols-5 gap-12 max-w-screen-2xl">
          <div className="col-span-1">
            <Sidebar onCreatePost={() => getPosts()} />
          </div>
          <div className="col-span-4 flex flex-col">
            <button onClick={() => setIsUserSelf(!isUserSelf)}>set user</button>
            <Header
              isUserSelf={isUserSelf}
              postCount={posts.length}
              username={username}
            />
            <Photos isUserSelf={isUserSelf} posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}
