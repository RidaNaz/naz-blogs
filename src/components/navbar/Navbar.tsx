import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image src="/Ridalogo.svg" alt="Rida Logo" width={35} height={35}/>
      
      <div className="font-logo font-bold text-center flex flex-1 text-4xl ml-4">Naz_Blogs</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <AuthLinks />
      </div>

      <div className={styles.social}>
        <Link href="https://www.linkedin.com/in/ridanaz67/">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/rida_naz67/">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100082363551016">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="https://www.youtube.com/@RidaNaz67">
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;