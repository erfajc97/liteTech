"use client"

import { usePostsStore } from "@/store/usePostsStore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const usePostDetail = () => {
  const { posts, getAllPosts, onePost, getOnePostById } = usePostsStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    getAllPosts("?page=1")
    getOnePostById(id.toString())
  }, [id])


  const handleNextPosts = () => {
    if (currentIndex + 3 < posts.length) {
      setCurrentIndex(currentIndex + 3);
    } else {
      setCurrentIndex(0);
    }
  };

  return {
    handleNextPosts,
    currentIndex,
    posts,
    onePost
  }
}