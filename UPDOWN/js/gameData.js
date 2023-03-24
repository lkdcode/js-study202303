// 게임 데이터
const gameData = {
    secret: makeRandomNumber(100), // 실제 정답
    answer: null, // 사용자의 선택값
    min: 1,
    max: 100,
};

// 랜덤 정수를 범위에 맞게 생성하는 함수
function makeRandomNumber(range) {
    return Math.floor((Math.random() * (range)) + 1);
}

export default gameData;