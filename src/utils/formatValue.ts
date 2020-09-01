const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  ); // TODO

// export const formatValueToDate = (value: string): string =>
//   Intl.DateTimeFormat('pt-br').format(new Date(value));

export default formatValue;
