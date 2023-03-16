alert(`[ 1 ~ 50 사이의 무작위 숫자를 5번 안에 맞춰보세요!!! ]`);

var result = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

for (var i = 5; i >= 0; i--) {

    if (i === 0) {
        alert(`기회를 모두 소진했습니다. GAME OVER!!`);
        break;
    }
    var inputNumber = +prompt(`>>`);

    if (inputNumber === result) {
        alert("딩동댕 ~ !!");
        break;
    } else if (inputNumber > result) {
        alert("DOWN!!!!");
    } else {
        alert("UP!!!!");
    }

    alert(`기회가 ${i-1}번 남았습니다.`);

}