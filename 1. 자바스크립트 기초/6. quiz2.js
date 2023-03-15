// +로 시작해서 - 출력

var number = +prompt('양의 정수');

var result = '';

for (var i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        result += '-';
    } else {
        result += '+';
    }
}

alert(result);