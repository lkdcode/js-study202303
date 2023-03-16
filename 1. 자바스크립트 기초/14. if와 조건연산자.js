var money = 3000;

var food;

var food = money >= 2000 ? `라면` : `삼각김밥`;

if (money >= 2000) {
    food = `라면`;
} else {
    food = `삼각김밥`;
}

console.log(`선택한 음식: ${food}`);