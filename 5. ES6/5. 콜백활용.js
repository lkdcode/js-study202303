const userList = [{
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbys: [
            '수영1',
            '축구1',
            '테니스1',
        ],
    },
    {
        account: 'banana',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbys: [
            '수영2',
            '축구2',
        ],
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbys: [
            '수영3',
            '축구3',
            '테니스3',
            '영화감상3',
        ],
    },
    {
        account: 'firer',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbys: [
            '수영4',
            '축구4',
        ],
    },
];

// 회원 목록에서 회원 정보를 출력하는 함수

function alertUserInfo(wannaSay) {

    for (const user of userList) {
        wannaSay(user);
    }

}

// alertUserInfo(u => {
//     console.log(`나는 ${u.userName}님이시다! 우허하`);
// });


// 배열 고차 함수
// forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
userList.forEach(n => {
    console.log(n.account);
});

const numbers = [10, 20, 30, 40];

// for (let n of numbers) {
//     total += n;
// }
// console.log(`총합: ${total}`);

let total = 0;
numbers.forEach(n => total += n);
console.log(`총합 : ${total}`);

console.log('==============================================');

// 취미가 딱 2개인 회원들만
// 필터링해서 새로운 배열에 담아줘

function filter2Hobby() {
    // 새로운 배열 생성
    const filteredArray = [];

    for (const user of userList) {
        if (user.hobbys.length === 2) {
            filteredArray.push(user);
        }
    }

    return filteredArray;
}

// 서울 사는 회원들만
// 필터링해서 새로운 배열에 담아줘

function filterUserLivedInSeoul() {
    // 새로운 배열 생성
    const filteredArray = [];

    for (const user of userList) {
        if (user.address === '경기') {
            filteredArray.push(user);
        }
    }

    return filteredArray;
}

// const newArray = filterUserLivedInSeoul();
// console.log(newArray);



// 특정 필터 조건에 의해 필터링하는 함수
function filter(condition) {
    // 새로운 배열 생성
    const filteredArray = [];

    for (const user of userList) {
        if (condition(user)) {
            filteredArray.push(user);
        }
    }

    return filteredArray;
}


// const newArray = filter(user => user.hobbys.length >= 3);
// console.log(newArray);

// 배열 고차함수 filter()
// 특정 조건에 의해 필터링된 배열을 반환
console.log('==========================================');

const numberArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
];

const newNumberArray = numberArray.filter(n => n % 2 === 0);

console.log(newNumberArray);

const user1 = userList.filter(user => user.account === 'abc1234');
console.log(user1);

console.log('=============================================');


// 배열 고차함수 map()
// 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서
// 매핑한 배열을 반환

const numbers2 = [
    10,
    20,
    30,
    40,
];

console.log('=============================================');

const plusTwo = numberArray.map(n => n + 2);
console.log(plusTwo);

console.log('=============================================');

const userNames = userList.map(user => user.address);
console.log(userNames);


// usreList에서 원하는 프로퍼티 값을 매핑하는
console.log('=============================================');


function myMap(condition) {
    const mappedArray = [];

    // for (const user of userList) {
    //     filteredArray.push(condition(user));
    // }

    userList.forEach(user => mappedArray.push(condition(user)));

    return mappedArray;
}

// const userNames = userList.map(user => user.address);
// const userName2 = userList.myMap(user => user.address);
// const userName2 = userList.myMap(user => user.account === 'abc1234');
const userName2 = myMap(user => ({
    userName: user.userName,
    address: user.address,
}));

console.log(userName2);


console.log('================================================================');

const appleBasket = [{
        color: 'green',
        sweet: 13,
    },
    {
        color: 'red',
        sweet: 14,
    },
    {
        color: 'red',
        sweet: 11,
    },
    {
        color: 'green',
        sweet: 6,
    },
    {
        color: 'green',
        sweet: 7,
    },
    {
        color: 'green',
        sweet: 9,
    }
];

// 사과 중 녹색이면서 당도가 9이상인 사과만 선별하여
// 이 사과는 xxx색이며 당도가 xxx입니다.
// 라는 문자열이 모여있는 배열을 리턴하세요.


const mappedApples = appleBasket
    .filter(apple => apple.sweet >= 9 && apple.color === 'green')
    .map(apple => `이 사과는 ${apple.color}색이며 당도가 ${apple.sweet}입니다.`);
console.log(mappedApples);

console.log('==================================');


// userList 에서 서울사는 user들의 
// 첫번째 취미만 배열에 모아서 리턴
// 회원의 첫번째 취미는 xxx입니다.

const usersTest = userList
    .filter(user => user.address === '서울') // [{5}, {5}, {5},]
    .map(user => user.hobbys[0]) // ['', '', '',]
    .forEach(hobby => {
        console.log(`회원의 첫번째 취미는 ${hobby}입니다.`);
    });

// console.log(usersTest);

console.log('======================================================');

// userList 에서 서울사는 user들의 
// 첫번째 취미만 배열에 모아서 리턴
// xxx님의 첫번째 취미는 xxx입니다.

const usersTest2 = userList
    .filter(user => user.address === '서울')
    .map(user => ({
        firstHobby: user.hobbys[0],
        name: user.userName,
    }))
    .forEach(info => {
        console.log(`${info.name}회원의 첫번째 취미는 ${info.firstHobby}입니다.`);
    });



