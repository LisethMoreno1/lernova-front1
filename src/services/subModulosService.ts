import { fetchData } from "./modulosService";

export const getSubModulosByModuloId = async (moduloId: number) => {
    return fetchData(`/modulos/${moduloId}/subModulos`);
  };
  