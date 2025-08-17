import { CommonOptions, getValue, defaultPrimitiveComparator } from "../utils/comparator";

export function binarySearch<T>(arr: T[], target: unknown, opts?: CommonOptions<T>): number {
  const order = opts?.order ?? "asc";
  let low = 0, high = arr.length - 1;
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
