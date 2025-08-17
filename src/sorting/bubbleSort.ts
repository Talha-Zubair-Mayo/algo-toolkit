import { CommonOptions, buildComparator } from "../utils/comparator";

export function bubbleSort<T>(arr: T[], opts?: CommonOptions<T>): T[] {
  const comparator = buildComparator(opts);
  const a = [...arr];
  for (let i = 0; i < a.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < a.length - i - 1; j++) {
      if (comparator(a[j], a[j + 1]) > 0) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return a;
}
