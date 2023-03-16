var size = +prompt(`정사각형을 그립니다.\n높이는 얼마입니까?`);
// var size = 5;

var result = '';

for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        result += '* ';
    }
    result += '\n';
}

alert(result);
// console.log(result);