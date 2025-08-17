// Bucket sort for numbers within a range. Defaults to using sqrt(n) buckets.
export function bucketSort(arr: number[], opts?: { bucketCount?: number; min?: number; max?: number }): number[] {
  const n = arr.length;
  if (n <= 1) return [...arr];
  const min = opts?.min ?? Math.min(...arr);
  const max = opts?.max ?? Math.max(...arr);
  const bucketCount = Math.max(1, opts?.bucketCount ?? Math.ceil(Math.sqrt(n)));
  const buckets: number[][] = Array.from({ length: bucketCount }, () => []);
  const range = max - min || 1;

  for (const num of arr) {
    const idx = Math.min(bucketCount - 1, Math.floor(((num - min) / range) * bucketCount));
    buckets[idx].push(num);
  }
  for (const b of buckets) b.sort((a, b) => a - b);
  return ([] as number[]).concat(...buckets);
}
