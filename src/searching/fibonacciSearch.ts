// Fibonacci search for sorted numeric arrays
export function fibonacciSearch(arr: number[], target: number): number {
  const n = arr.length;
  let fibMMm2 = 0, fibMMm1 = 1, fibM = fibMMm2 + fibMMm1;
  while (fibM < n) { fibMMm2 = fibMMm1; fibMMm1 = fibM; fibM = fibMMm2 + fibMMm1; }
  let offset = -1;
  while (fibM > 1) {
    const i = Math.min(offset + fibMMm2, n - 1);
    if (arr[i] < target) { fibM = fibMMm1; fibMMm1 = fibMMm2; fibMMm2 = fibM - fibMMm1; offset = i; }
    else if (arr[i] > target) { fibM = fibMMm2; fibMMm1 = fibMMm1 - fibMMm2; fibMMm2 = fibM - fibMMm1; }
    else return i;
  }
  if (fibMMm1 && arr[offset + 1] === target) return offset + 1;
  return -1;
}
