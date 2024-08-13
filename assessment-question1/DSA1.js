function lengthOfLIS(numbers) {
  if (numbers.length === 0) return 0;

  const dp = new Array(numbers.length).fill(1);

  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// Test
const numbers = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(numbers));
