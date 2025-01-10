"use client"
import { useEffect, useState } from "react";
import { Post } from "../types";
import { getOnePostByIdServices } from "../services/getOnePostByIdServices";
import { usePostsStore } from "@/store/usePostsStore";

const usePostsHook = () => {
  const { posts, pagination, getAllPosts: getAllPostsStore } = usePostsStore();
  const [currentPage, setCurrentPage] = useState(pagination?.currentPage || 1);
  const [bannerPosts, setBannerPosts] = useState<Post | null>(null);
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  const firstThreePosts = allPosts?.slice(1, 4) || [];
  const theRestOfPostsFirstPage = allPosts.filter((post) => {
    return post?.id !== allPosts?.[0]?.id &&
      post?.id !== allPosts?.[1]?.id &&
      post?.id !== allPosts?.[2]?.id &&
      post?.id !== "4bc31c32-2a58-478a-9b9f-4e02d6e90824";
  });

  useEffect(() => {
    getAllPosts(currentPage);
    getBannerPosts();
  }, [currentPage]);

  useEffect(() => {
    if (posts?.length) {
      setAllPosts((prevPosts) => {
        const uniquePosts = posts.filter((post) => !prevPosts.some((p) => p.id === post.id));
        return [...prevPosts, ...uniquePosts];
      });
    }
  }, [posts]);

  const getBannerPosts = async () => {
    try {
      const { data } = await getOnePostByIdServices({ id: "4bc31c32-2a58-478a-9b9f-4e02d6e90824" });
      setBannerPosts(data?.response || null);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPosts = async (page?: number) => {
    try {
      const query = page ? `?page=${page.toString()}` : "";
      await getAllPostsStore(query);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllPosts,
    bannerPosts,
    thefirstThreePosts: firstThreePosts,
    theRestOfPostsFirstPage,
    currentPage,
    setCurrentPage,
  };
};

export default usePostsHook;
