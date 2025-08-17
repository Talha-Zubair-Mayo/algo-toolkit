// Radix sort (LSD, base 10). Handles negative numbers by sorting abs and recombining.
function radixSortNonNegative(arr: number[]): number[] {
  if (arr.length === 0) return [];
  let max = Math.max(...arr);
  let exp = 1;
  let output = [...arr];

  while (Math.floor(max / exp) > 0) {
    const count = new Array(10).fill(0);
    const out = new Array(output.length).fill(0);
    for (const num of output) count[Math.floor(num / exp) % 10]++;
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];
    for (let i = output.length - 1; i >= 0; i--) {
      const num = output[i];
      const idx = Math.floor(num / exp) % 10;
      out[count[idx] - 1] = num;
      count[idx]--;
    }
    output = out;
    exp *= 10;
  }
  return output;
}

export function radixSort(arr: number[]): number[] {
  const negatives = arr.filter(n => n < 0).map(n => Math.abs(n));
  const nonNegatives = arr.filter(n => n >= 0);
  const sortedNeg = radixSortNonNegative(negatives).reverse().map(n => -n);
  const sortedPos = radixSortNonNegative(nonNegatives);
  return [...sortedNeg, ...sortedPos];
}
