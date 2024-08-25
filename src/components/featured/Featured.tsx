import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Rida Naz here!</b>
        <span> Discover my stories and creative ideas.</span>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/featured.webp" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Harnessing Cloud-Native Generative AI to Transform Coding Education</h1>
          <p className={styles.postDesc}>
          As an educator and aspiring cloud engineer, I&apos;m passionate about integrating cloud-native AI into coding education. My journey in technology has led me to develop innovative tools that make complex concepts accessible to students. By leveraging AI, I aim to create personalized learning experiences that empower the next generation of developers to thrive in a tech-driven world.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;