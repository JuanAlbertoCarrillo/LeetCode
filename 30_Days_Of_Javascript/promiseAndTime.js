/** 2723. Add Two Promises
 * Given two promises promise1 and promise2, return a new promise. 
 * promise1 and promise2 will both resolve with a number. 
 * The returned promise should resolve with the sum of the two numbers.
 */
var addTwoPromises = async function(promise1, promise2) {
    // return Promise.all([promise1, promise2]).then(([result1, result2]) => result1 + result2);
    let r1 = await promise1.then(function (value){return(value)});
    let r2 = await promise2.then(function (value){return(value)});
    return r1+r2;
};



/** 2621. Sleep 
 * Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
 */
async function sleep(millis) {
    // await new Promise(resolve => setTimeout(resolve , millis) )
    return new Promise(function(myResolve, myReject){setTimeout(function(){myResolve(true)},millis)});  
}

/** 2715. Timeout Cancellation
 * Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
 * 
 * After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
 * setTimeout(cancelFn, cancelTimeMs)
 * 
 * Initially, the execution of the function fn should be delayed by t milliseconds.
 * 
 * If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.
 */
let cancellableTimeout = function(fn, args, t) {
    const a = setTimeout(() => {fn(...args);},t);
    const cancelFn = ()=>{clearTimeout(a)};
    return cancelFn;
};

/**
 * 2725. Interval Cancellation
 * Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
 * 
 * After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
 * setTimeout(cancelFn, cancelTimeMs)
 * 
 * The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
 */
let cancellableInterval = function(fn, args, t) {
    fn(...args);
    const a = setInterval(() => {fn(...args);},t);
    const cancelFn = ()=>{clearInterval(a)};
    return cancelFn;
};
