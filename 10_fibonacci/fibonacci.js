const fibonacci = function(num) {
    let fn1 = 0;
    let fn2 = 0;
    let fib = 0

    for (let i= 0; i <= num; i++) {
        if (i === 0) {
            fib = 0;
        } else if (i === 1) {
            fib = 1;
        } else {
            fn2 = fn1;
            fn1 = fib;
            fib = fn1 + fn2;
        }
    }
    
    return fib;
}; 

// Do not edit below this line
module.exports = fibonacci;
