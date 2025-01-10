"use client"

import { usePostsStore } from "@/store/usePostsStore";
import { useEffect, useState } from "react";

export const usePostDetail = () => {
  const { posts, getAllPosts } = usePostsStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    getAllPosts("?page=1")
  }, [])


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
    posts
  }
}