// startMessage

alert(`🔫 러시안 룰렛게임을 시작합니다.`);
alert(`##### 🎲 규칙은 다음과 같습니다. #####\n1. 게임에 참가할 인원과 총알 갯수를 입력합니다.\n2. 총알을 랜덤으로 격발 시킵니다.\n3. 총알을 모두 소진하면 게임이 종료됩니다.`);
alert(`규칙을 잘 숙지하였다 믿고,\n🔫 러시안 룰렛게임을 진행하도록 하겠습니다.`);


// 참가할 인원 입력 받기

var memberSize = 0;
while (true) {
    memberSize = +prompt(`🙋 참가할 인원을 입력하세요.\n[ 최소 2명 이상 최대 10명 이하의 인원만 가능합니다. ]`);

    if (memberSize >= 2 && memberSize <= 10) {
        break;
    } else {
        alert(`바보야 2명 이상 10명 이하, 숫자만 입력하라고 총으로 맞을래? 🤷`);
    }

}

// 이름 입력 받기 

alert(`##### 👉 플레이어의 이름을 입력받겠습니다. #####`);

var playerList = [];
var inputMemberNameCount = 1;


while (playerList.length !== memberSize) {
    var inputName = prompt(`🙋 ${inputMemberNameCount}번째 참가자의 이름을 입력해주세요.\n[ 최소 2글자 이상 최대 10글자 이하의 이름만 가능합니다. ]`);

    if (playerList.includes(inputName)) {
        alert(`얘는 왜 또 참여해? 혹시 싫어하는 사람이야? 그래도 중복은 안 돼 🤷`);
    } else if (inputName.length >= 2 && inputName.length <= 10) {
        alert(`😞 ${inputName} 님이 입장하였습니다.`);
        playerList.push(inputName);
        inputMemberNameCount++;
    } else {
        alert(`바보야 2글자 이상 10글자 이하, 숫자만 입력하라고 주먹으로 맞을래? 🤷`);
    }
}

// 총알 입력 받기

alert(`##### 👉 게임에 사용될 총알 갯수를 입력받겠습니다. #####`);

var bullet = 0;

while (true) {
    var bullet = +prompt(`🙋 총알 갯수를 입력해주세요.\n[ 최소 2발 이상 최대 12발 이하의 이름만 가능합니다. ]`);

    if (bullet >= 2 && bullet <= 12) {
        alert(`😞 총알 장전 완료 : [ ${bullet} 발 ]`);
        break;
    } else {
        alert(`바보야 2발 이상 12발 이하, 숫자만 입력하라고 !! 🤷`);
    }
}

alert(`##### 게임 준비가 완료되었습니다. #####`);
alert(`##### 게임 시작전 마음의 준비를 하십시오. #####`);


// play game

var order = 0;

while (bullet > 0) {

    if (order === playerList.length) {
        order = 0;
    }
    var player = playerList[order++];

    var randomShoot = (Math.floor((Math.random() * (10 - 1 + 1)) + 1)) % 2;

    if (randomShoot) {
        alert(`격발 -> ${player}`);
        playerList.splice(playerList.indexOf(player), 1);
        bullet--;

        if (playerList.length === 1) {
            break;
        }
    } else {
        alert(`미격발 -> ${player}`);
    }

}

// 최종 결과 출력하기

if (playerList.length > 1) {
    alert(`### 축하드립니다. 2명 이상이 생존하시다니.... ###`);
    alert(`### 운이 좋다고 해야할지..킄ㄱ큭 ###`);
    alert(`### 생존자 명단입니다.. [ ${playerList} ] ###\n앞으로 착하게 사십쇼.`);
    alert(`게 임 종 료`);
} else {
    alert(`### 축하드립니다. 혼자 살아남으셨군요 ###`);
    alert(`### 그 옷에 묻은 피는 못 본체 해드립죠..킄ㄱ큭크 ###`);
    alert(`### 아시겠지만, 생존자 명단입니다... [ ${playerList} ] ###`);
    alert(`### 그럼...킄긐ㄱ..이만..크크큭 ###`);
    alert(`게 임 종 료`);
}