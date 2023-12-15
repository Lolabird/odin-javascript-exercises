const fibonacci = function(num) {
    let fn1 = 0;
    let fn2 = 0;
    let fib = 0;

    try {
        newNum = parseInt(num);

        if (isNaN(newNum)) {
            throw new Error(`"${num}" is not a number.`)
        } else {
            if (newNum < 0 ) {
                return "OOPS";
            } else {
                for (let i= 0; i <= newNum; i++) {
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
            }
        }
    } catch (error) {
        return error;
    }
    
}; 

// Do not edit below this line
module.exports = fibonacci;
