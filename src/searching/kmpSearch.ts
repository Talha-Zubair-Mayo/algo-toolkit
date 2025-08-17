export function kmpSearch(text: string, pattern: string): number {
  if (pattern.length === 0) return 0;
  const lps = new Array(pattern.length).fill(0);
  let len = 0;
  for (let i = 1; i < pattern.length;) {
    if (pattern[i] === pattern[len]) lps[i++] = ++len;
    else if (len) len = lps[len - 1];
    else lps[i++] = 0;
  }
  let i = 0, j = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) { i++; j++; if (j === pattern.length) return i - j; }
    else if (j) j = lps[j - 1];
    else i++;
  }
  return -1;
}
