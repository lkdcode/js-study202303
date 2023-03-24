// 외부 js 불러오기
import * as foo from './foo.js';
import * as bar from './bar.js';

// 메인 실행 파일 app.js
// 실행 코드만 입력: 함수 호출
// 함수 정의, 클래스 정의, 변수 정의 xx 금지

console.log(bar.add(10, 20));

console.log(`x: ${bar.x}`);
console.log(`x: ${foo.x}`);