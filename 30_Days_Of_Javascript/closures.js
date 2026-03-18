/** 2667. Create Hello World Function
 * Write a function createHelloWorld. 
 * It should return a new function that 
 * always returns "Hello World".
 */

let createHelloWorld = function(...args) { // const createHelloWorld = (...arg) => () => "Hello World";
  return function(...args) { // (...args) captures all arguments passed to the returned function.
      return "Hello World"
  }
};

// const f = createHelloWorld();
// f(); // "Hello World"


/** 2620. Counter.
 * Given an integer n, return a counter function. 
 * This counter function initially returns n and 
 * then returns 1 more than the previous value 
 * every subsequent time it is called
 * (n, n + 1, n + 2, etc).
 */

let createCounter = n => () => n++;

// const counter = createCounter(10)
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12

/** 2704. To Be Or Not To Be
 * Write a function expect that helps developers test their code. 
 * It should take in any value val and return an object with the following two functions:
 * 
 * toBe(val) accepts another value and returns true if the two values === each other. 
 * If they are not equal, it should throw an error "Not Equal".
 * 
 * notToBe(val) accepts another value and returns true if the two values !== each other. 
 * If they are equal, it should throw an error "Equal".
 */

let expect = function(val) {
  return {
    toBe: function(newVal){
      if(newVal===val){
        return true;
      }else{
        throw new Error('Not Equal');
      }
    },

    notToBe: function(newVal){
      if(newVal!==val){
        return true;
      }else{
        throw new Error('Equal');
      }
    }
  }
};

// expect(5).toBe(5);
// expect(5).notToBe(5); 

/** 2665. Counter II
 * Write a function createCounter. It should accept an initial integer init. 
 * It should return an object with three functions.
 * 
 * The three functions are:
 *  - increment() increases the current value by 1 and then returns it.
 *  - decrement() reduces the current value by 1 and then returns it.
 *  - reset() sets the current value to init and then returns it.
 */

let createCounterTwo = function(init) {
  let currentValue = init;

  return {
    increment: () => ++currentValue,
    decrement: () => --currentValue,
    reset: () => (currentValue = init)
  };
};