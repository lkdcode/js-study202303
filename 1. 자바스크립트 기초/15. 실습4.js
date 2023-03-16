alert(`~~~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~~~`);
alert(`[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]`);
alert(`=============================================`);

var inputNumber = 1;

var index = 1;
while (true) {
    var firstNumber = Math.floor(Math.random() * (99 - 2) + 1);
    var secondNumber = Math.floor(Math.random() * (99 - 2) + 1);


    if (firstNumber < secondNumber) {
        var temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    var result = firstNumber + secondNumber;

    alert(`Q${index++}. ${firstNumber} + ${secondNumber} = ??`);

    inputNumber = +prompt(`>>`);
    if (inputNumber === 0) {
        alert(`게임을 종료합니다!`);
        break;
    }

    if (inputNumber === result) {
        alert(`정답입니다!`);
    } else {
        alert(`틀렸어요~`);
    }
}