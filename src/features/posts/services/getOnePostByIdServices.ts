
import axiosInstance from "@/utils/axiosConfig";
import { API_ENDPOINTS } from "@/utils/endPoints";
import { AxiosError } from "axios";

export const getOnePostByIdServices = async ({ id }: { id: string }) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.POSTS + "/" + id);

    return {
      error: false,
      message: "Post obtenido correctamente",
      data: response.data,
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.error("Error en la respuesta de la API:", error.response.data);
        throw new Error(
          error.response.data.message || "Error al obtener el post"
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
    throw new Error("Ocurrió un error desconocido al obtener el post");
  }
};
