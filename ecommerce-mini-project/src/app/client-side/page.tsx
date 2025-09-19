"use client";
import React, { useEffect, useState } from "react";

type Post = {
  title: string;
  [key: string]: any;
};

function ClientSide() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      setPosts(data?.posts);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <ul>
        {posts &&
          posts.map((post: Post, index: number) => {
            return <li key={index}>{post.title}</li>;
          })}
      </ul>
    </>
  );
}

export default ClientSide;
