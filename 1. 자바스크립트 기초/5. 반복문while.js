// 10 ~ 0 카운트 다운

// var count = 10;

// while (--count >= 0) {
//     console.log(count);
// }

// 1 ~ 10까지 누적 총합

var total = 0;

var n = 1; // 제어 변수 (초기값: begin)

while (n <= 10) { // 조건식 (끝값: end)
    //반복코드

    if (n % 2 === 1) {
        total += n;
    }

    n++; // 증감식 (단계: step)
}

console.log(`총합 : ${total}`);