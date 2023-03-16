// console.log(`~~~~~~~~~~~~ 재미있는 UP&DOWN 게임~~~~~~~~~~~~`);
// console.log(`[ 1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!! ]`);
alert(`~~~~~~~~~~~~ 재미있는 UP&DOWN 게임~~~~~~~~~~~~`);
alert(`[ 1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!! ]`);

var result = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

while (true) {

    var inputNumber = +prompt(`>>`);

    if (inputNumber === result) {
        alert(`딩동댕 ~~~~ !!`);
        break;
    } else if (inputNumber > result) {
        alert(`DOWN!!!!`);
    } else {
        alert(`UP!!!!`);
    }
}