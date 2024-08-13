function twoSum(numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(numbers[i], i);
  }

  throw new Error("No two sum solution");
}

//Test
const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target));
