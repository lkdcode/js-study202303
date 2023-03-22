// 자바스크립트의 함수는 함수를 리턴할 수 있음

/*
function calculator(n1, n2) {

    function add() {
        return n1 + n2;
    }

    return add;
}

const result = calculator(10, 20);

console.log(typeof result);

const sum = result();

console.log(sum);
*/

// const calculator = (n1, n2) => () => n1 + n2;

/*
function calculator(n1, n2) {
    return () => n1 + n2;
}
*/

// let count = 0; // 카운팅 변수 (전역 변수)

// // 카운트를 올리는 함수
// const increase = () => ++count;

// console.log(increase());
// console.log(increase());
// console.log(increase());

/*
const increase = () => {
    let count = 0;
    return ++count;
};

console.log(increase());
console.log(increase());
console.log(increase());
*/

/*
const increaseClosure = () => {
    let count = 0;

    return () => count++;
};

const test = increaseClosure();

console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());
*/


// 즉시 실행 함수 : 정의와 동시에 호출
// 익명 함수
const result = (function (n1, n2) {
    return n1 + n2;
})(5, 8);

console.log(result);
console.log(result);
console.log(result);


console.log('==============================================');

const increase = (() => {
    let count = 0;
    return () => count++;
})();

console.log(increase());
console.log(increase());
console.log(increase());



const randomNumber = (() => {
    return Math.floor((Math.random() * 9) + 1);
})();

console.log('============================================');

console.log(randomNumber);

const shot = (() => {
    const random = Math.floor((Math.random() * 9) + 1);
    if (random % 2 === 0) {
        return 1;
    }
    return 0;
})();

console.log('============================================');
console.log(shot);


const randomMessage = (() => {
    const number = Math.floor((Math.random() * 10) + 1);
    if (number % 2 === 0) {
        return '수고하세요';
    } else {
        return '안녕하세요';
    }
})();
