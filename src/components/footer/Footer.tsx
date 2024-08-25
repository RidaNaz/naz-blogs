import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/Ridalogo.svg" alt="naz blog" width={30} height={30} />
          <h1 className={styles.logoText}>Naz_Blogs</h1>
        </div>
        <p className={styles.desc}>
          I&apos;m Rida Naz, a passionate student of Cloud Native Applied Generative AI Engineering and a dedicated educator. My interests span across fashion, food, travel, coding, culture, and style, which I explore and share through this blog.
        </p>
        <div className={styles.icons}>
          <Link href="https://www.linkedin.com/in/ridanaz67/">
            <Image src="/linkedin.png" alt="" width={18} height={18} />
          </Link>
          <Link href="https://www.instagram.com/rida_naz67/">
            <Image src="/instagram.png" alt="" width={18} height={18} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100082363551016">
            <Image src="/facebook.png" alt="" width={18} height={18} />
          </Link>
          <Link href="https://www.youtube.com/@RidaNaz67">
            <Image src="/youtube.png" alt="" width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="#blogs">Blog</Link>
          <Link href="https://ridanaz-portfolio.vercel.app">Portfolio</Link>
          <Link href="linktree-address">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="blog?cat=style">Style</Link>
          <Link href="blog?cat=fashion">Fashion</Link>
          <Link href="blog?cat=coding">Coding</Link>
          <Link href="blog?cat=travel">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.linkedin.com/in/ridanaz67/">LinkedIn</Link>
          <Link href="https://www.instagram.com/rida_naz67/">Instagram</Link>
          <Link href="https://www.facebook.com/profile.php?id=100082363551016">Facebook</Link>
          <Link href="https://www.youtube.com/@RidaNaz67">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;