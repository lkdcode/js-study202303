// 1. 누적 합 (4~7 , 7~4)

var number = +prompt('첫번째 숫자를 입력!');
var secondNumber = +prompt('두번째 숫자를 입력!');

var total = 0;

if (number < secondNumber) {
    for (var i = number; i <= secondNumber; i++) {
        total += i;
    }
} else if (number > secondNumber) {
    for (var i = secondNumber; i <= number; i++) {
        total += i;
    }
}

alert(`${number} ~ ${secondNumber}까지의 누적합 : ${total}`)