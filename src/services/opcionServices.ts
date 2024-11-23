import { fetchData } from "./modulosService";

export const getOpcionesBySubModuloId = async (subModuloId: number) => {
    return fetchData(`/subModulos/${subModuloId}/opciones`);
  };