"use client"
import { useEffect, useState } from "react";
import { Post } from "../types";
import { getAllPostsServices } from "../services/getAllPostsServices";
import { getOnePostByIdServices } from "../services/getOnePostByIdServices";


const usePostsHook = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [firstThreePosts, setFirstThreePosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bannerPosts, setBannerPosts] = useState<Post>();

  const theRestOfPostsFirstPage = posts.filter((post) => post.id !== firstThreePosts[0].id && post.id !== firstThreePosts[1].id && post.id !== firstThreePosts[2].id && post.id !== "4bc31c32-2a58-478a-9b9f-4e02d6e90824") || [];


  useEffect(() => {
    getAllPosts(currentPage)
    getBannerPosts()
  }, [currentPage]);

  const getBannerPosts = async () => {
    try {
      setLoading(true);
      const { data } = await getOnePostByIdServices({ id: "4bc31c32-2a58-478a-9b9f-4e02d6e90824" });
      setBannerPosts(data?.response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const getAllPosts = async (page?: number) => {
    try {
      setLoading(true);
      const query = page ? `?page=${page.toString()}` : "";
      const { data } = await getAllPostsServices({ query: query });
      const newPosts = data?.response?.data || [];
      if (page === 1) {
        const firstThree = [...newPosts].slice(1, 4);
        setFirstThreePosts(firstThree);
        setPosts(newPosts);
      } else {
        setPosts((prevPosts) => [
          ...prevPosts,
          ...(data?.response?.data || []),
        ]);
      }

      setCurrentPage(data?.response?.meta?.pagination?.currentPage || 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    posts,
    getAllPosts,
    loading,
    bannerPosts,
    thefirstThreePosts: firstThreePosts,
    theRestOfPostsFirstPage,
    currentPage,
    setCurrentPage,
    setPosts
  }
};

export default usePostsHook;