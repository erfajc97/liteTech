"use client";
import { dataToFormData } from "@/helpers/dataToFormData";
import { FormValues } from "../types";
import { usePostsStore } from "@/store/usePostsStore";
import { getAllPostsServices } from "../services/getAllPostsServices";

const useNewPostHook = () => {
  const { addPost, error, errorMessage, loading, setIsUploading, isUploading, setIsCancelled, isCancelled } =
    usePostsStore();


  const handleSubmit = async (values: FormValues) => {
    setIsCancelled(false);
    setIsUploading(true);
    await handleFinish(values);
  };

  const handleFinish = async (values: FormValues) => {
    const formDataValue = {
      title: values.title,
      image: values.image.file.originFileObj,
    };
    const formData = dataToFormData(formDataValue);
    !isUploading && await addPost(formData);
    await getAllPostsServices({ query: "?page=1" })
  };

  return {
    error,
    errorMessage,
    loading,
    setIsUploading,
    handleSubmit,
    isUploading,
    isCancelled,

  };
};

export default useNewPostHook;
