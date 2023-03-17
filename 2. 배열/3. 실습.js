var STOP = `그만`;

var total = 0;
var inputNumbers = [];

while (true) {
    var input = prompt(`숫자를 입력하세요.
그만두려면 '그만'이라고 입력하세요!`);

    if (input.includes(STOP)) {
        break;
    } else {
        total += +input;
        inputNumbers.push(+input);
    }
}

inputNumbers.sort(function (a, b) {
    return a - b;
});

alert(`입력한 숫자 목록 [${inputNumbers}]
입력한 숫자 총합: ${total}`);