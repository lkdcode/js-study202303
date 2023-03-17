var foodList = [
    `닭꼬치`,
    `볶음밥`,
    `짜장면`,
    `족발`
];

// indexOf : 배열의 특정 데이터가 몇번 인덱스에 있는지 탐색 후 리턴

console.log(foodList.indexOf(`짜장면`));

// var count = 0;
// var target = `짜장면`;

// for (var food of foodList) {
//     if (food === target) {
//         break;
//     }
//     count++;
// }

// console.log(count);


// slice() : 배열을 일정 부분 잘라냄. 사본 배열을 리턴

foodList.push(`오뎅`, `순대국밥`);
console.log(foodList);

var slicedFoods = foodList.slice(1, 4);
console.log(slicedFoods);
console.log(foodList);


// 2번부터 끝까지 추출
var slicedFoods2 = foodList.slice(2);
console.log(slicedFoods2);

var slicedFoods3 = foodList.slice();
console.log(slicedFoods3);


// reverse() : 배열 역순으로 배치, 원본이 변함
console.log(`========================`);

var nums = [
    10,
    20,
    30,
    40,
    50,
];

var copyNums = nums.slice();

copyNums.reverse();

console.log(nums);

console.log(`========================`);

// concat() : 배열 2개를 연결

var arr1 = [
    10,
    20,
    30,
];

var arr2 = [
    100,
    900,
    700,
    1000,
];

var concatedArr = arr1.concat(arr2);

console.log(concatedArr);

// includes() : 배열의 특정 데이터가 존재하는지 확인
console.log(`========================`);

var resultFlag = foodList.includes(`닭꼬치`);
console.log(resultFlag);


// splice() : 배열의 특정요소 제거, 삽입
console.log(`============================`);
console.log(foodList);

foodList.splice(1, 2);

console.log(foodList);

foodList.splice(0, 1, `보쌈`);

console.log(foodList);

// 1번에 마라탕 삽입
foodList.splice(1, 0, `마라탕`);

console.log(foodList);

foodList.splice(2, 0, `아이스크림`, `떡볶이`);


foodList.splice(2);
console.log(foodList);