// Anatomy
// Recursive case: calls itself with updated argument
// Base case: condition to break the cycle
// Remember to have 'return' for both cases
// Base case return prevents a stack overflow
// Recursive case return ensures return values bubble up as expected

// Pros and Cons
//
// Recursion is often more readable, but can have performance drawback, due to creating a tall stack, and thus a large memory footprint, and an expensive operation
//
// One clear ideal situation for choosing a recusive approach is when you are working with a data structure of questionable depth, such as a tree or graph.
//
// Anytime you are using a tree or converting something into a tree - consider recusion
// Additionally, consider recurion if:
// The problem can be divided into a number of sub-problems that are smaller instances of the same problem
// Each instance of the sub-problem is identical in nature
// The solution of each subproblem can be combined to solve the problem at hand

let counter = 0;
function inception() {
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  return inception(); // important to return here, as otherwise the value from the base case will not bubble up
}

function findFactorial(num) {
  if (num === 2) {
    return 2;
  }
  return num * findFactorial(num - 1);
}

// O(2^n) -> exponential time - worse than O(n^2)
// Recursive solution to fib is not ideal, as iterative version is O(n)
// On the other hand, dynamic programming/memoization can bring this down to O(n)
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
