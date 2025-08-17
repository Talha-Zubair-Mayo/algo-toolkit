import { CommonOptions, buildComparator } from "../utils/comparator";

function heapify<T>(a: T[], n: number, i: number, cmp: (x: T, y: T) => number) {
  let largest = i;
  const l = 2 * i + 1, r = 2 * i + 2;
  if (l < n && cmp(a[l], a[largest]) > 0) largest = l;
  if (r < n && cmp(a[r], a[largest]) > 0) largest = r;
  if (largest !== i) {
    [a[i], a[largest]] = [a[largest], a[i]];
    heapify(a, n, largest, cmp);
  }
}

export function heapSort<T>(arr: T[], opts?: CommonOptions<T>): T[] {
  const a = [...arr];
  const cmp = buildComparator(opts);
  const n = a.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(a, n, i, cmp);
  for (let i = n - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    heapify(a, i, 0, cmp);
  }
  // If descending requested, reverse the result (since we built a max-heap for asc)
  if (opts?.order === "desc") return a.reverse();
  return a;
}
