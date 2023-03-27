import PostItem from "./post-item";

import classes from "./posts-grid.module.css";

import React from "react";

type post = {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
};

const PostsGrid = (props: { posts: Array<post> }) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}
    </ul>
  );
};

export default PostsGrid;
