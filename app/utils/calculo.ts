export const calcularMedia = (notas: number[]) => {
  if (notas.some(n => isNaN(n))) return 0;
  return notas.reduce((a, b) => a + b, 0) / notas.length;
};