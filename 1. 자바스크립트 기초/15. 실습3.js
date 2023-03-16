alert(`[ 난이도를 설정하세요 ~~~! ]`);
alert(`[ 1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)]`);

var inputLevel = +prompt(`>>`);
var level = 0;

while (true) {

    if (inputLevel === 1) {
        level = 3;
        break;
    } else if (inputLevel === 2) {
        level = 6;
        break;
    } else if (inputLevel === 3) {
        level = 10;
        break;
    } else {
        alert(`제대로 입력해주세요.`);
        alert(`[ 1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)]`);
        inputLevel = +prompt(`>>`);
    }

}

alert(`[ 1 ~ 50 사이의 무작위 숫자를 ${level} 안에 맞춰보세요!!!]`);

var result = Math.floor(Math.random() * (50 - 2)) + 1;

for (var i = level; i >= 0; i--) {

    if (i === 0) {
        alert(`기회를 모두 소진했습니다. GAME OVER!!`);
        break;
    }

    var inputNumber = +prompt(`>>`);

    if (inputNumber === result) {
        alert(`딩동댕 ~~ !!!`);
        break;
    } else if (inputNumber > result) {
        alert(`DOWN !!!!`);
    } else {
        alert(`UP !!!!`);
    }

    alert(`기회가 ${i-1}번 남았습니다.`);

}
