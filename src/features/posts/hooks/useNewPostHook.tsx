"use client";
import { dataToFormData } from "@/helpers/dataToFormData";
import { FormValues } from "../types";
import { usePostsStore } from "@/store/usePostsStore";

const useNewPostHook = () => {
  const { addPost, error, errorMessage, loading, isCancelled } = usePostsStore();

  const handleSubmit = async (values: FormValues) => {
    if (isCancelled) {
      console.log("Proceso cancelado, no se ejecuta el servicio");
      return;
    }

    const formDataValue = {
      title: values.title,
      image: values.image.file.originFileObj,
    };
    const formData = dataToFormData(formDataValue);
    await addPost(formData);
    console.log("Servicio ejecutado correctamente");
  };

  return {
    error,
    errorMessage,
    loading,
    handleSubmit,
  };
};

export default useNewPostHook;
