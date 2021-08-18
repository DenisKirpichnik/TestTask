export const findClosestFibonacciNumber = (number: number, first: number = 0, second: number = 1) => {
  if (number === 0) return 0;
  // Initialize the third number by adding the first number and the second one
  let third = first + second;
  // Iterate until we get to the number or over it
  while (third <= number) {
    // Reinitialize the numbers
    first = second;
    second = third;
    third = first + second;
  }
  // Find the closest number by calculating the difference between nums like so   num1 < myNum < Num2
  let ans = Math.abs(third - number) >= Math.abs(second - number) ? second : third;

  return ans;
};
