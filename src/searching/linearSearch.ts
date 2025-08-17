import { CommonOptions, getValue } from "../utils/comparator";

export function linearSearch<T>(arr: T[], target: unknown, opts?: CommonOptions<T>): number {
  for (let i = 0; i < arr.length; i++) {
    const val = getValue(arr[i], opts?.key);
    if (val === target) return i;
  }
  return -1;
}
