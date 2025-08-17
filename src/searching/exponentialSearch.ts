import { CommonOptions, getValue, defaultPrimitiveComparator } from "../utils/comparator";

export function exponentialSearch<T>(arr: T[], target: unknown, opts?: CommonOptions<T>): number {
  const n = arr.length;
  if (n === 0) return -1;
  const order = opts?.order ?? "asc";
  const cmpDir = (a: unknown, b: unknown) => (order === "asc" ? defaultPrimitiveComparator(a, b) : defaultPrimitiveComparator(b, a));

  if (defaultPrimitiveComparator(getValue(arr[0], opts?.key), target) === 0) return 0;
  let i = 1;
  while (i < n && cmpDir(getValue(arr[i], opts?.key), target) <= 0) i *= 2;

  // Binary search in the found range
  let low = Math.floor(i / 2), high = Math.min(i, n - 1);
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midVal = getValue(arr[mid], opts?.key);
    const cmp = defaultPrimitiveComparator(midVal, target);
    if (cmp === 0) return mid;
    if (order === "asc") {
      if (cmp < 0) low = mid + 1; else high = mid - 1;
    } else {
      if (cmp > 0) low = mid + 1; else high = mid - 1;
    }
  }
  return -1;
}
