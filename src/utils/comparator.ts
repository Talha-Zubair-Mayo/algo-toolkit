export type KeySelector<T> = keyof T | ((item: T) => unknown);
export type Order = "asc" | "desc";
export interface CommonOptions<T> { key?: KeySelector<T>; order?: Order; }

export function getValue<T>(item: T, key?: KeySelector<T>): unknown {
  if (!key) return item as unknown;
  if (typeof key === "function") return key(item);
  return (item as any)[key];
}

export function defaultPrimitiveComparator(a: unknown, b: unknown): number {
  if (typeof a === "number" && typeof b === "number") return a - b;
  if (typeof a === "string" && typeof b === "string") return a.localeCompare(b);
  // Fallback: string compare
  return String(a).localeCompare(String(b));
}

export function buildComparator<T>(opts?: CommonOptions<T>): (a: T, b: T) => number {
  const order = opts?.order ?? "asc";
  return (a: T, b: T) => {
    const va = getValue(a, opts?.key);
    const vb = getValue(b, opts?.key);
    const r = defaultPrimitiveComparator(va, vb);
    return order === "asc" ? r : -r;
  };
}
