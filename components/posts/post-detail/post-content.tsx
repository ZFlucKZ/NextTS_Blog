import classes from "./post-content.module.css";

import React from "react";
import PostHeader from "./post-header";

import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  slug: "slugslugslugslugslugslug1",
  title: "titletitletitletitle",
  image: "getting-started-nextjs.png",
  excerpt: "excerptexcerptexcerptexcerptexcerptexcerptexcerptexcerptexcerpt",
  date: "2022-02-10",
  // ** MarkDown github (For more techniques)
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
