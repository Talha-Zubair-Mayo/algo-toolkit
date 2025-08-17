# @tzm96dev/algo-toolkit

Ultimate **Sorting & Searching Toolkit** for numbers, strings, and objects.

## Features

- 🔢 Works with numbers, strings, and objects (via key or accessor)
- ⚡ Optimized algorithms (Quick, Merge, Heap, Radix, KMP, etc.)
- 🔄 Stable sorts where applicable
- 📦 TypeScript + JavaScript compatible
- 🧩 Real-world examples for each algorithm

---

## 📥 Installation

### 1. Install via npm

```bash
npm install @tzm96dev/algo-toolkit
```

### 2. Install via yarn

```bash
yarn add @tzm96dev/algo-toolkit
```

### 3. Install via pnpm

```bash
pnpm add @tzm96dev/algo-toolkit
```

---

## 🚀 Usage Examples

### JavaScript

```js
const {
  mergeSort,
  binarySearch,
  kmpSearch,
} = require("@tzm96dev/algo-toolkit");

console.log(mergeSort([5, 2, 9, 1])); // [1,2,5,9]
console.log(binarySearch([1, 2, 5, 9], 9)); // 3
console.log(kmpSearch("hello world", "world")); // 6
```

### TypeScript

```ts
import { mergeSort, binarySearch, kmpSearch } from "@tzm96dev/algo-toolkit";

console.log(mergeSort([5, 2, 9, 1]));
console.log(binarySearch([1, 2, 5, 9], 9));
console.log(kmpSearch("hello world", "world"));
```

---

## 📚 Sorting Algorithms

| Algorithm      | Best     | Average  | Worst    | Stable | Use Case                     |
| -------------- | -------- | -------- | -------- | ------ | ---------------------------- |
| Bubble Sort    | O(n)     | O(n²)    | O(n²)    | ✅ Yes | Teaching basics              |
| Insertion Sort | O(n)     | O(n²)    | O(n²)    | ✅ Yes | Small/nearly sorted arrays   |
| Selection Sort | O(n²)    | O(n²)    | O(n²)    | ❌ No  | Educational                  |
| Merge Sort     | O(nlogn) | O(nlogn) | O(nlogn) | ✅ Yes | Stable sorting               |
| Quick Sort     | O(nlogn) | O(nlogn) | O(n²)    | ❌ No  | Fastest general case         |
| Heap Sort      | O(nlogn) | O(nlogn) | O(nlogn) | ❌ No  | Memory efficient             |
| Counting Sort  | O(n+k)   | O(n+k)   | O(n+k)   | ✅ Yes | Small integer range          |
| Radix Sort     | O(nk)    | O(nk)    | O(nk)    | ✅ Yes | Integers (handles negatives) |
| Bucket Sort    | O(n+k)   | O(n+k)   | O(n²)    | ❌ No  | Uniform floats / known range |

---

## 🔍 Searching Algorithms

| Algorithm          | Time Complexity   | Notes                          |
| ------------------ | ----------------- | ------------------------------ |
| Linear Search      | O(n)              | Works on unsorted arrays       |
| Binary Search      | O(log n)          | Requires sorted array          |
| Jump Search        | O(√n)             | Faster linear on sorted        |
| Interpolation      | O(log log n) best | Uniform distribution (numbers) |
| Exponential Search | O(log n)          | Unknown length / large arrays  |
| Ternary Search     | O(log₃ n)         | Optimization problems          |
| Fibonacci Search   | O(log n)          | Sorted numeric arrays          |
| Hash Search        | O(1) avg          | Fast lookups with Map          |
| KMP Search         | O(n+m)            | Substring search               |
| Rabin-Karp Search  | O(n+m) avg        | Substring (rolling hash)       |

---

## 🧩 Real-World Usage

```ts
import {
  countingSort,
  radixSort,
  bucketSort,
  fibonacciSearch,
  hashSearch,
  kmpSearch,
} from "@tzm96dev/algo-toolkit";

console.log(countingSort([18, 21, 19, 18, 20, 19]));
console.log(radixSort([9876543210, 1234567890, 5555555555]));
console.log(bucketSort([0.78, 0.12, 0.56, 0.89, 0.45]));

console.log(fibonacciSearch([10, 20, 30, 40, 50], 30)); // 2
console.log(
  hashSearch(
    [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
    ],
    2,
    { key: "id" }
  )
); // 1
console.log(kmpSearch("The quick brown fox", "brown")); // 10
```

---

## 🤝 Contributing

We ❤️ contributions!

1. Fork this repo:
   ```bash
   git clone https://github.com/Talha-Zubair-Mayo/algo-toolkit.git
   cd algo-toolkit
   ```
2. Create a branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Make your changes, commit & push:
   ```bash
   git commit -m "Added new algorithm"
   git push origin feature/my-feature
   ```
4. Open a Pull Request 🎉

## 📜 License

MIT
