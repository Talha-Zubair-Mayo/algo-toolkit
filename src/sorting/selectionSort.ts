import { CommonOptions, buildComparator } from "../utils/comparator";

export function selectionSort<T>(arr: T[], opts?: CommonOptions<T>): T[] {
  const comparator = buildComparator(opts);
  const a = [...arr];
  for (let i = 0; i < a.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < a.length; j++) {
      if (comparator(a[j], a[minIdx]) < 0) minIdx = j;
    }
    if (minIdx !== i) [a[i], a[minIdx]] = [a[minIdx], a[i]];
  }
  return a;
}
