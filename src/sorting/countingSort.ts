// Counting sort for integers in a (possibly small) range. Supports negatives.
export function countingSort(arr: number[], opts?: { min?: number; max?: number }): number[] {
  if (arr.length === 0) return [];
  const min = opts?.min ?? Math.min(...arr);
  const max = opts?.max ?? Math.max(...arr);
  const range = max - min + 1;
  const count = new Array(range).fill(0);
  const output = new Array(arr.length);

  for (const num of arr) count[num - min]++;
  for (let i = 1; i < count.length; i++) count[i] += count[i - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    const idx = num - min;
    output[(count[idx] as number) - 1] = num;
    count[idx]--;
  }
  return output as number[];
}
