export const formatValueToCurrency = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  ); // TODO

export const formatValueToDate = (value: Date): string =>
  Intl.DateTimeFormat('pt-br').format(new Date(value));
