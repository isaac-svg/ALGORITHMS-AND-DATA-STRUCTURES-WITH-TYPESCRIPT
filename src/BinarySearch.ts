export default function bs_list(haystack: [], needle: number): boolean {
  let low = 0;
  let high: number = haystack.length;

  do {
    const midpoint = Math.floor(low + (high - low) / 2);
    const value = haystack[midpoint];

    if (value === needle) {
      return true;
    } else if (value > needle) {
      high = midpoint;
    } else {
      low = midpoint + 1;
    }
  } while (low < high);
  return false;
}
