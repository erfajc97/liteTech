
import axiosInstance from "@/utils/axiosConfig";
import { API_ENDPOINTS } from "@/utils/endPoints";
import { AxiosError } from "axios";

export const getAllPostsServices = async ({ query }: { query: string }) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.POSTS + query);
    return {
      error: false,
      message: "Posts obtenidos correctamente",
      data: response.data,
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.error("Error en la respuesta de la API:", error.response.data);
        throw new Error(
          error.response.data.message || "Error al obtener los posts"
        );
      } else if (error.request) {
        console.error(
          "Error en la solicitud. Sin respuesta del servidor:",
          error.request
        );
        throw new Error("No se recibió respuesta del servidor");
      }
    }

    console.error("Error desconocido:", error);
    throw new Error("Ocurrió un error desconocido al obtener los posts");
  }
};
