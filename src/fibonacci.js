const fibonacciSequenceWithCache = number => {
  const cache = {};

  const fibonacciInternal = fibonaccNumber => {
    if (fibonaccNumber === 0 || fibonaccNumber === 1) return fibonaccNumber;
    if (fibonaccNumber in cache) {
      return cache[fibonaccNumber];
    }
    cache[fibonaccNumber] = fibonacciInternal(fibonaccNumber - 2) + fibonacciInternal(fibonaccNumber - 1);
    return cache[fibonaccNumber];
  };
  return fibonacciInternal(number);
};

const fibonacciOld = value => {
  if (value === 0 || value === 1) return value;

  return fibonacciOld(value - 2) + fibonacciOld(value - 1);
};

for (let n = 0; n < 101; n++) {
  console.log(n, fibonacciSequenceWithCache(n));
}