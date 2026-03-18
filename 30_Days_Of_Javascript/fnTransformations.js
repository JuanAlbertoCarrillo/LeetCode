/** 2629. Function Composition
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 */

let compose = function(functions) { 
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};

// var compose = function(functions) {
//     return x => functions.reduceRight((acc,f)=>f(acc),x)
// };

/** 2703. Return Length of Arguments Passed
 * Write a function argumentsLength that returns the count of arguments passed to it.
 */

let argumentsLength = function(...args) {
    return args.length;
};

/** 2666. Allow One Function Call
 * Given a function fn, return a new function that is identical to the original function 
 * except that it ensures fn is called at most once.
 * The first time the returned function is called, it should return the same result as fn.
 * Every subsequent time it is called, it should return undefined.
 */
let once = function(fn) {
    let wasFnCalled = false;
    return function(...args){
        if(wasFnCalled){
            return undefined;
        }
        wasFnCalled=true;
        return fn(...args);
    }
};
/** 2623. Memoize
 * Given a function fn, return a memoized version of that function.
 * 
 * A memoized function is a function that will never be called twice with the same inputs.
 * Instead it will return a cached value.
 * 
 * You can assume there are 3 possible input functions: sum, fib, and factorial.
 * 
 * sum accepts two integers a and b and returns a + b. 
 * Assume that if a value has already been cached for the arguments (b, a) where a != b, 
 * it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), 
 * two separate calls should be made.
 * 
 * fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 * 
 * factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 */
// TO-DO