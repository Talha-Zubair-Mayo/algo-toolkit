import { CommonOptions, buildComparator } from "../utils/comparator";

function merge<T>(left: T[], right: T[], cmp: (a: T, b: T) => number): T[] {
  const result: T[] = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (cmp(left[i], right[j]) <= 0) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

export function mergeSort<T>(arr: T[], opts?: CommonOptions<T>): T[] {
  if (arr.length <= 1) return arr;
  const cmp = buildComparator(opts);
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), opts);
  const right = mergeSort(arr.slice(mid), opts);
  return merge(left, right, cmp);
}
