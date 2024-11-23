/**
 * Transforma una cadena de texto en mayúsculas.
 * @param value
 * @returns String
 */
export const upperCase = (value: string) => `${value || ""}`.toUpperCase();

/**
 * Transforma una cadena de texto en minúsculas.
 * @param value
 * @returns String
 */
export const lowercase = (value: string) => `${value || ""}`.toLowerCase();

/**
 * Transforma la cadena de texto con el con el primer carácter en mayúscula.
 * @param value
 * @returns Retorna la cadena de texto con el primer carácter en mayúscula.
 */
export const capitalizedFirst = (value: string): string =>
  value &&
  `${
    String(value)?.charAt(0)?.toUpperCase() +
    String(value)?.slice(1)?.toLocaleLowerCase()
  }`;

/**
 * Transforma un Tipo File a Base64 modo Async
 * @version 0.0.1
 * @async
 * @param {object} file tipo file
 * @return {string} base64
 */
export const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    // reader.readAsDataURL(file);
    if (file instanceof Blob) {
      reader.readAsDataURL(file);
    }
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

/**
 * transforma todo de base64 a arraybuffer
 * @version 0.0.1
 * @param {string} base64 valor
 * @return {array} array en bytes
 */
export const base64ToArrayBuffer = (base64: any) => {
  if (!base64) return false;
  const binaryString = window.atob(
    base64.substring(base64.indexOf("base64,") + 7, base64.length)
  );
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString?.charCodeAt(i);
  }
  return bytes;
};

/**
 * Valida si una fecha es válida.
 * @param dia
 * @param mes
 * @param año
 * @returns `true` si la fecha es válida, `false` si no lo es.
 */
export const validarFecha = (
  dia: number,
  mes: number,
  año: number
): boolean => {
  return (
    dia <= 28 ||
    (dia <= 29 &&
      mes === 2 &&
      año % 4 === 0 &&
      (año % 100 !== 0 || año % 400 === 0)) ||
    (dia <= 30 && (mes === 4 || mes === 6 || mes === 9 || mes === 11)) ||
    (dia <= 31 &&
      (mes === 1 ||
        mes === 3 ||
        mes === 5 ||
        mes === 7 ||
        mes === 8 ||
        mes === 10 ||
        mes === 12))
  );
};
