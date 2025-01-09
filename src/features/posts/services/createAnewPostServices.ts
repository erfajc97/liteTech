
import axiosInstance from "@/utils/axiosConfig";
import { API_ENDPOINTS } from "@/utils/endPoints";
import { AxiosError } from "axios";

export const createAnewPostServices = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINTS.POSTS, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      error: false,
      message: "Post creado correctamente",
      data: response.data,
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.error("Error en la respuesta de la API:", error.response.data);
        return {
          error: true,
          message: error.response.data.message || "Error al crear el post",
        };
      } else if (error.request) {
        console.error(
          "Error en la solicitud. Sin respuesta del servidor:",
          error.request
        );
        return {
          error: true,
          message: "No se recibió respuesta del servidor",
        };
      }
    }

    console.error("Error desconocido:", error);
    return {
      error: true,
      message: "Ocurrió un error desconocido al crear el post",
    };
  }
};
