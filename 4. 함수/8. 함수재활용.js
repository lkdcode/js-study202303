// 배열의 특정 데이터의 인덱스를 구하는 함수

var NOT_FOUND = -1;

function myIndexOf(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }

    return NOT_FOUND;
}

function myIncludes(arr, element) {
    return myIndexOf(arr, element) !== NOT_FOUND;
}

var foodList = ['짜장면', '탕수육', '고추잡채', '족발'];

var idx = myIndexOf(foodList, '탕수육'); // idx : 1
console.log(idx);

var flag = myIncludes(foodList, '족발');
console.log(flag);