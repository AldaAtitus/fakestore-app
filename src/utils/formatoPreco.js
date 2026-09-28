export function formatarPreco(value) {
  return `R$ ${Number(value).toFixed(2).replace('.', ',')}`;
}