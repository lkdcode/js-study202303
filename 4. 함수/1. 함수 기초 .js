// 함수 정의 - 만든다
function happyGreeting(yourName) {
    console.log(`${yourName}님 안녕하세요! 방가방가!`);
    console.log('오늘도 즐거운 하루되세요~~~');
}

function makeLine() {
    console.log();
    console.log('================================================');
    console.log();
}

// 함수 호출 - 사용한다
// 함수 사용이유 - 재사용성, 코드의 모듈화
happyGreeting('뽀로로');

makeLine();

// 원의 넓이를 자주 구한다. 원주율 * 반지름^2
function calcAreaCircle(r) {
    var PI = 3.14159265;
    var area = PI * r ** 2;
    return area;
}

var r1 = calcAreaCircle(5);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var r2 = calcAreaCircle(15);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var r3 = calcAreaCircle(20);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


