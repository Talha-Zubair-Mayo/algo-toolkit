import { CommonOptions, getValue, defaultPrimitiveComparator } from "../utils/comparator";

export function jumpSearch<T>(arr: T[], target: unknown, opts?: CommonOptions<T>): number {
  const n = arr.length;
  if (n === 0) return -1;
  const order = opts?.order ?? "asc";
  const step = Math.max(1, Math.floor(Math.sqrt(n)));
  let prev = 0;
  let current = step;

  const cmpDir = (a: unknown, b: unknown) => (order === "asc" ? defaultPrimitiveComparator(a, b) : defaultPrimitiveComparator(b, a));

  while (prev < n && cmpDir(getValue(arr[Math.min(current, n) - 1], opts?.key), target) < 0) {
    prev = current;
    current += step;
    if (prev >= n) return -1;
  }
  while (prev < Math.min(current, n)) {
    if (defaultPrimitiveComparator(getValue(arr[prev], opts?.key), target) === 0) return prev;
    prev++;
  }
  return -1;
}
