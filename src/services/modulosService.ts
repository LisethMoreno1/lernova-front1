import { BASE_URL } from "./api";

export const fetchData = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${response.statusText} - ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error en fetchData:`, error);
    throw error;
  }
};

// Función para obtener los módulos
export const getModulos = async () => {
  return fetchData("/modulos");
};