import { CommonOptions, buildComparator } from "../utils/comparator";

export function quickSort<T>(arr: T[], opts?: CommonOptions<T>): T[] {
  if (arr.length <= 1) return arr;
  const cmp = buildComparator(opts);
  const pivot = arr[arr.length - 1];
  const left: T[] = [];
  const right: T[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (cmp(arr[i], pivot) <= 0) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left, opts), pivot, ...quickSort(right, opts)];
}
