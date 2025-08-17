// Interpolation search for sorted, uniformly distributed numeric arrays
export function interpolationSearch(arr: number[], target: number): number {
  let low = 0, high = arr.length - 1;
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) return arr[low] === target ? low : -1;
    const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
    if (arr[pos] === target) return pos;
    if (arr[pos] < target) low = pos + 1; else high = pos - 1;
  }
  return -1;
}
