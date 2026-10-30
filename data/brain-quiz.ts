export interface QuizQuestion {
  id: string;
  code: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const QUIZ: QuizQuestion[] = [
  {
    id: "typeof-null",
    code: `console.log(typeof null);`,
    options: ["null", "object", "undefined", "TypeError"],
    answer: 1,
    explanation:
      "A bug from JavaScript's first implementation that can never be fixed: null's type tag matched objects, so typeof null is \"object\".",
  },
  {
    id: "float",
    code: `console.log(0.1 + 0.2 === 0.3);`,
    options: ["true", "false", "NaN", "TypeError"],
    answer: 1,
    explanation:
      "Binary floating point can't represent 0.1 or 0.2 exactly. The sum is 0.30000000000000004, so the strict comparison is false.",
  },
  {
    id: "array-plus",
    code: `console.log([1, 2, 3] + [4]);`,
    options: ["[1, 2, 3, 4]", "1,2,3,4", "1,2,34", "NaN"],
    answer: 2,
    explanation: 'Both arrays are converted to strings first — "1,2,3" and "4" — and + concatenates them.',
  },
  {
    id: "sort",
    code: `console.log([10, 1, 2].sort());`,
    options: ["[1, 2, 10]", "[1, 10, 2]", "[10, 2, 1]", "[2, 1, 10]"],
    answer: 1,
    explanation: 'Without a compare function, sort() compares elements as strings, and "10" sorts before "2".',
  },
  {
    id: "minus-plus",
    code: `console.log("5" - 2, "5" + 2);`,
    options: ["3 7", "NaN 52", "3 52", "NaN NaN"],
    answer: 2,
    explanation: "Minus only works on numbers, so \"5\" becomes 5 and the result is 3. Plus with a string operand concatenates instead: \"52\".",
  },
  {
    id: "event-loop",
    code: `setTimeout(() => console.log("timeout"));
Promise.resolve().then(() => console.log("promise"));
console.log("sync");`,
    options: ["timeout, promise, sync", "sync, timeout, promise", "sync, promise, timeout", "promise, sync, timeout"],
    answer: 2,
    explanation:
      "Synchronous code runs first. Promise callbacks are microtasks and drain before the next macrotask, which is where the timer callback runs.",
  },
  {
    id: "var-loop",
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));
}`,
    options: ["0 1 2", "3 3 3", "2 2 2", "undefined ×3"],
    answer: 1,
    explanation:
      "var is function-scoped, so all three callbacks share one i. By the time they run the loop has finished and i is 3. let would print 0 1 2.",
  },
  {
    id: "loose-equality",
    code: `console.log([] == ![]);`,
    options: ["true", "false", "TypeError", "undefined"],
    answer: 0,
    explanation:
      "![] is false (arrays are truthy). Then [] == false coerces both sides to numbers: [] → \"\" → 0 and false → 0, so it's true.",
  },
  {
    id: "math-max",
    code: `console.log(Math.max());`,
    options: ["0", "undefined", "Infinity", "-Infinity"],
    answer: 3,
    explanation:
      "Math.max starts from the identity value for \"largest\" — -Infinity — and compares upward. With no arguments, that's what it returns.",
  },
];
