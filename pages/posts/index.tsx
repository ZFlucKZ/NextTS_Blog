import AllPosts from "@/components/posts/all-posts";
import React from "react";

const DUMMY_POSTS = [
  {
    slug: "slugslugslugslugslugslug1",
    title: "titletitletitletitle",
    image: "getting-started-nextjs.png",
    excerpt: "excerptexcerptexcerptexcerptexcerptexcerptexcerptexcerptexcerpt",
    date: "2022-02-10",
  },
  {
    slug: "slugslugslugslugslugslug2",
    title: "titletitletitletitle",
    image: "getting-started-nextjs.png",
    excerpt: "excerptexcerptexcerptexcerptexcerptexcerptexcerptexcerptexcerpt",
    date: "2022-02-10",
  },
  {
    slug: "slugslugslugslugslugslug3",
    title: "titletitletitletitle",
    image: "getting-started-nextjs.png",
    excerpt: "excerptexcerptexcerptexcerptexcerptexcerptexcerptexcerptexcerpt",
    date: "2022-02-10",
  },
  {
    slug: "slugslugslugslugslugslug4",
    title: "titletitletitletitle",
    image: "getting-started-nextjs.png",
    excerpt: "excerptexcerptexcerptexcerptexcerptexcerptexcerptexcerptexcerpt",
    date: "2022-02-10",
  },
  {
    slug: "slugslugslugslugslugslug5",
    title: "titletitletitletitle",
    image: "getting-started-nextjs.png",
    excerpt: "excerptexcerptexcerptexcerptexcerptexcerptexcerptexcerptexcerpt",
    date: "2022-02-10",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
