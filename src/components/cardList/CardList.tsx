import React from "react";
import styles from "./cardList.module.css";
import Image from "next/image";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const getData = async (page:any, cat:any) => {
  const res = await fetch(
    `https://naz-blogs.vercel.app/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }:any) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title} id="recent">Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item:any) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;