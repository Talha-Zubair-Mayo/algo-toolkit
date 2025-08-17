import { CommonOptions, getValue } from "../utils/comparator";

export function hashSearch<T>(arr: T[], target: unknown, opts?: CommonOptions<T>): number {
  const map = new Map<unknown, number>();
  for (let i = 0; i < arr.length; i++) {
    const v = getValue(arr[i], opts?.key);
    if (!map.has(v)) map.set(v, i); // first occurrence
  }
  return map.has(target) ? (map.get(target) as number) : -1;
}
