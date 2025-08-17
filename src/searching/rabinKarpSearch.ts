export function rabinKarpSearch(text: string, pattern: string, prime: number = 101): number {
  const m = pattern.length, n = text.length;
  if (m === 0) return 0;
  if (m > n) return -1;
  const d = 256;
  let p = 0, t = 0, h = 1;
  for (let i = 0; i < m - 1; i++) h = (h * d) % prime;
  for (let i = 0; i < m; i++) {
    p = (d * p + pattern.charCodeAt(i)) % prime;
    t = (d * t + text.charCodeAt(i)) % prime;
  }
  for (let i = 0; i <= n - m; i++) {
    if (p === t) {
      let j = 0;
      while (j < m && text[i + j] === pattern[j]) j++;
      if (j === m) return i;
    }
    if (i < n - m) {
      t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;
      if (t < 0) t += prime;
    }
  }
  return -1;
}
