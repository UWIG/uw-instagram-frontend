import { useState, useEffect } from "react";
import Post from "./post";
import { postType } from "./post/postType";
import { timelineType } from "./types";
import PostSkeleton from "./post/postSkeleton";
export default function Timeline(props: timelineType) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (props.posts.length > 0) {
      setLoading(false);
    }
  }, [props.posts]);

  return (
    <div className="container col-span-2 mx-20 z-1 mt-10">
      {loading ? (
        <div>
          <PostSkeleton />
          <PostSkeleton />
        </div>
      ) : (
        props.posts.map((post: postType, inx) => (
          <Post
            key={post.id}
            username={post.username}
            id={post.id}
            likes={post.likes}
            caption={post.caption}
            comments={post.comments}
            avatar={post.avatar}
            mediaList={post.mediaList}
            time_created={post.time_created}
            onCreateComment={props.onCreateComment}
          />
        ))
      )}
    </div>
  );
}
