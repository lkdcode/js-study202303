////////////////////////////////////////////////////////////////////////////

var START_MESSAGE = `~~~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~~~
\n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]
\n=============================================`;

var INPUT_LEVEL_MESSAGE = `~~~~~~~~~~ 난이도를 설정합니다. ~~~~~~~~~~
\n[ 1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20)]`;

var INPUT_LEVEL_ERROR_MESSAGE = `제대로 입력하세요.
\n[ 1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20)]`;

var EXIT_MESSAGE = `게임을 종료합니다!`;
var ANSWER_MESSAGE = `정답입니다!`;
var FAIL_MESSAGE = `틀렸어요~`;

var HIGH = 1;
var MIDDLE = 2;
var LOW = 3;
var MIN_NUMBER = 1;
var MAX_NUMBER = 0;

var PLUS_TYPE = 1;
var MINUS_TYPE = 2;

var PLUS = `+`;
var MINUS = `-`;
var MULTIPLE = `x`;
var EXIT = 0;

var firstNumber;
var secondNumber;
var result;
var calculationType;

var inputResult = 0;
var resultCount = 0;
var failCount = 0;
var questionCount = 1;


////////////////////////////////////////////////////////////////////////////


alert(START_MESSAGE);


while (true) {
    var level = +prompt(INPUT_LEVEL_MESSAGE);
    if (level === HIGH | level === MIDDLE | level === LOW) {
        break;
    } else {
        alert(INPUT_LEVEL_ERROR_MESSAGE);
    }
}


while (true) {

    if (level === HIGH) {
        firstNumber = getRandomNumberHigh();
        secondNumber = getRandomNumberHigh();
    } else if (level === MIDDLE) {
        firstNumber = getRandomNumberMiddle();
        secondNumber = getRandomNumberMiddle();
    } else if (level === LOW) {
        firstNumber = getRandomNumberLow();
        secondNumber = getRandomNumberLow();
    }

    if (firstNumber < secondNumber) {
        var temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    var type = getRandomType();

    if (type === PLUS_TYPE) {
        result = firstNumber + secondNumber;
        calculationType = PLUS;
    } else if (type === MINUS_TYPE) {
        result = firstNumber - secondNumber;
        calculationType = MINUS;
    } else {
        result = firstNumber * secondNumber;
        calculationType = MULTIPLE;
    }

    inputResult = +prompt(`Q${questionCount++}. ${firstNumber} ${calculationType} ${secondNumber} = ??`);

    if (inputResult === EXIT) {
        alert(EXIT_MESSAGE);
        break;
    }

    if (inputResult === result) {
        alert(ANSWER_MESSAGE);
        resultCount++;
    } else {
        alert(FAIL_MESSAGE);
        failCount++;
    }

}

alert(`정답횟수: ${resultCount}회, 틀릿횟수: ${failCount}회`);


////////////////////////////////////////////////////////////////////////////


function getRandomNumberHigh() {
    return Math.floor(Math.random() * (99 - 2) + 1);
}

function getRandomNumberMiddle() {
    return Math.floor(Math.random() * (50 - 1 + 1) + 1);
}

function getRandomNumberLow() {
    return Math.floor(Math.random() * (20 - 1 + 1) + 1);
}

function getRandomType() {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}