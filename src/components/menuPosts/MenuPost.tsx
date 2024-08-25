import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }: any) => {
  return (
    <div className={styles.items}>
      <Link href="/posts/12" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/coding2.webp" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>
            Understanding the Basics of Cloud Computing for Developers
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rida Naz</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/5" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/style1.webp" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.style}`}>Style</span>
          <h3 className={styles.postTitle}>
            The Art of Mixing High and Low Fashion
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rida Naz</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/8" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/travel2.webp" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Solo Travel: Empowering Tips for the Adventurous Woman
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rida Naz</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/10" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/culture2.webp" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Preserving Cultural Heritage in the Digital Age
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rida Naz</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/3" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/food1.webp" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Farm-to-Table: The Benefits of Eating Locally Sourced Food
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rida Naz</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/2" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/fashion2.webp" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Sustainable Fashion: Building a Greener Wardrobe
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rida Naz</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;