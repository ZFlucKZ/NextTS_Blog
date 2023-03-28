import React, { Fragment } from "react";

import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";

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

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
