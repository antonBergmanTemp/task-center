/**
 * Formats a number with K/M suffixes for readability
 * @param num Number to format
 * @returns Formatted string (123, 5.2K, 1.3M)
 */
export function formatNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    return `${(num / 1000).toFixed(num % 1000 < 100 ? 0 : 1)}K`;
  } else {
    return `${(num / 1000000).toFixed(num % 1000000 < 100000 ? 0 : 1)}M`;
  }
}
