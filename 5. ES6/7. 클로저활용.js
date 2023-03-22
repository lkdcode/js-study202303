/*
const increase = (() => {
    let count = 0;
    return () => ++count;
})();

const decrease = (() => {
    let count = 1000;
    return () => --count;
})();


console.log(increase());

console.log(decrease());
*/
/*
function counterClosure() {
    let count = 0;

    function increase() {
        return ++count;
    }

    function decrease() {
        return --count;
    }

    return {
        // increase: increase,
        increase,
        // decrease: decrease,
        decrease,
    };
}

const counter = counterClosure();

const increase = counter.increase;
const decrease = counter.decrease;

*/

/*
const counter = (() => {
    let count = 0;

    return {
        increase: () => ++count,
        decrease: () => --count,
    };
})();

console.log(counter.increase());

const {
    increase,
    decrease
} = counter;

*/

/*
function counterWithCbClosure() {

    let count = 0;

    function process(callback) {
        return count = callback(count);
    }

    return process;
}

const counter_ = counterWithCbClosure();

console.log(counter_(count => ++count));
console.log(counter_(count => count += 3));
console.log(counter_(count => count **= 2));
*/

const counter_ = (() => {
    let count = 0;

    function process(callback) {
        return count = callback(count);
    }

    return process;
})();

console.log(counter_(count => ++count));
console.log(counter_(count => ++count));
console.log(counter_(count => count ** 3));
console.log(counter_(count => --count));