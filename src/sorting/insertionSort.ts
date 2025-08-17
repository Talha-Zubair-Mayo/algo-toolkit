import { CommonOptions, buildComparator } from "../utils/comparator";

export function insertionSort<T>(arr: T[], opts?: CommonOptions<T>): T[] {
  const comparator = buildComparator(opts);
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0 && comparator(a[j], key) > 0) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
  return a;
}
