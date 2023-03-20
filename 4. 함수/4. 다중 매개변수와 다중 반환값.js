// multi parameter : 매개변수가 n개인 경우

// 집합 자료구조를 매개변수로 사용
// [배열, 객체]

// n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

// ES6 스프레드

function addAll(...numbers) {
    var total = 0;

    for (var n of numbers) {
        total += n;
    }

    return total;
}

var result = addAll(10, 20, 30);
console.log(`result : ${result}`);

// function foo(...arr1, ...arr2) {
// }

// foo([10, 20], [500, 1000, 1500]);

console.log('==========================================');

// 함수의 리턴값은 언제나 1개
// 2개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴 받고 싶어

function operateAll(n1, n2) {
    return {
        multiply: n1 * n2,
        plus: addAll(n1, n2),
        divide: n1 / n2,
        minus: n1 - n2,
    };
}

var result = operateAll(10, 5);
console.log(`덧셈결과: ${result.plus}`);
console.log(`뺄셈결과: ${result.minus}`);
console.log(`곱셈결과: ${result.multiply}`);
console.log(`나눗셈결과: ${result.divide}`);