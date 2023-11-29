export const formatNumber = (number: number) =>
    Intl.NumberFormat('sr', { maximumFractionDigits: 0 }).format(number);
