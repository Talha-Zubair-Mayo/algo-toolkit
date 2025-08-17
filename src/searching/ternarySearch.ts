import { CommonOptions, getValue, defaultPrimitiveComparator } from "../utils/comparator";

export function ternarySearch<T>(arr: T[], target: unknown, opts?: CommonOptions<T>): number {
  let l = 0, r = arr.length - 1;
  const order = opts?.order ?? "asc";
  const cmpDir = (a: unknown, b: unknown) => (order === "asc" ? defaultPrimitiveComparator(a, b) : defaultPrimitiveComparator(b, a));

  while (r >= l) {
    const mid1 = l + Math.floor((r - l) / 3);
    const mid2 = r - Math.floor((r - l) / 3);
    const v1 = getValue(arr[mid1], opts?.key);
    const v2 = getValue(arr[mid2], opts?.key);

    if (defaultPrimitiveComparator(v1, target) === 0) return mid1;
    if (defaultPrimitiveComparator(v2, target) === 0) return mid2;

    if (cmpDir(target, v1) < 0) r = mid1 - 1;
    else if (cmpDir(target, v2) > 0) l = mid2 + 1;
    else { l = mid1 + 1; r = mid2 - 1; }
  }
  return -1;
}
