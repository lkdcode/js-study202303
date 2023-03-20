// 객체 리터럴(값)

var dog = {
    // 프로퍼티 작성

    'name': `뽀삐`,
    kind: `진돗개`,
    age: 3,
    // 'for waiting': 11,
    injection: true,
    favorite: ['산책', '간식'],
    hate: null,
    playWithChild: function () {},
};

var cat = {
    // 프로퍼티 작성
    'name': `콩순이`,
    age: 2,
    injection: true,
    favorite: ['낮잠자기', '방어지럽히기'],
    kind: `블랙러시안`,
};

console.log(typeof dog);
console.log(typeof cat);

// 객체에 저장된 데이터 참조
console.log(dog.name);

console.log(cat.age);
console.log(cat.favorite);

console.log(dog.favorite[0]);

// 프로퍼티 참조 2
console.log('====================');
console.log(dog.injection);
console.log(dog['injection']);

// key를 변수에 저장
var fv = 'favorite';
console.log(cat[fv]);

// 프로퍼티 값 수정
dog.age = 4;
cat.favorite[1] = '실뭉치';

dog['injection'] = false;
console.log(dog);

// 프로퍼티 동적 추가
cat.owner = '김철수'; // 추가
cat.owner = '박영희'; // 수정

console.log(cat);

// 프로퍼티 삭제
delete cat.owner;

console.log('==========================');
console.log(cat);

// 프로퍼티 존재 유무 확인
// key를 반드시 문자열로 표기해야함.

var ageFlag = 'age123' in cat;
console.log(ageFlag);
var m = 'master';

// master 라는 프로퍼티가 없으면 추가해라
if (!(m in cat)) {
    cat[m] = '김또또';
}

console.log('===============');

// 객체를 순회하는 반복문 for in
// key를 반복해서 추출해줌
for (var k in dog) {
    // console.log(k);
    console.log(dog[k]);
}


console.log('===============');

//객체의 중첩구조
//예시 : 게시판

var articles = {
    totalCount: 25578, //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀', //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        },
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로', //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        },
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자', //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        }
    ]
};

console.log('==============================');

console.log(articles.totalCount);
console.log(articles.articleList);
console.log(articles.articleList[1].writer);

var bbs = articles.articleList;
console.log(bbs[0].writer);

// in 객체
// key 가 4개니까 4바퀴
for (var x in articles) {
    console.log(x);
}

// of 배열
for (var x of articles.articleList) {
    console.log(x);
}