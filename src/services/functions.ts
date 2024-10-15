export const formatNumber = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num < 10000) {
    return num.toLocaleString();
  } else if (num < 1000000) {
    return Math.floor(num / 1000) + 'K';
  } else {
    return (num / 1000000).toFixed(1) + 'M';
  }
}