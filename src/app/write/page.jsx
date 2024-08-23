"use client";

import Image from "next/image";
import styles from "./write.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to ensure it only runs on the client side
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!file) return;

    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setUploading(true);
        },
        (error) => {
          console.error("Upload failed:", error);
          setUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            setUploading(false);
          });
        }
      );
    };

    upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
          catSlug: catSlug || "style",
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        router.push(`/posts/${data.slug}`);
      } else {
        console.error("Failed to publish:", res.statusText);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        aria-label="Post Title"
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
        value={catSlug}
        aria-label="Category"
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button
          className={styles.button}
          onClick={() => setOpen(!open)}
          aria-label="Toggle File Options"
        >
          <Image src="/plus.png" alt="Add options" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
              aria-label="Upload Image"
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="Upload Image" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton} aria-label="Upload External Link">
              <Image src="/external.png" alt="Upload External Link" width={16} height={16} />
            </button>
            <button className={styles.addButton} aria-label="Upload Video">
              <Image src="/video.png" alt="Upload Video" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button
        className={styles.publish}
        onClick={handleSubmit}
        disabled={uploading}
      >
        Publish
      </button>
      {uploading && <div className={styles.uploading}>Uploading...</div>}
    </div>
  );
};

export default WritePage;
