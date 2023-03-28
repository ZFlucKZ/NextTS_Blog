import React from "react";

import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";

type post = {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
};

const FeaturedPosts = (props: Array<post>) => {
  // console.log(props);
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
