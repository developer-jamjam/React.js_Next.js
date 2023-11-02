/*
    Module ?
    - 전체프로그램의 일부이지만, 독립적인 파일들로 분리되어 있어서 언제든 다른 프로그램에
      재사용 할 수 있는 단위
    - 자바스크립트에서는 하나의 js 파일을 하나의 모듈로 본다.
    Module System ?
    - 모듈을 만들고, 불러와서 사용할 수 있도록 도와주는 시스템
    - Common JS 모듈 시스템 (CJS)
    - ES 모듈 시스템 (ESM)
*/

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// CJS 
/*
    module - Node.js가 기본적으로 제공하는 내장객체
    exports - module내장객체 안에 들어있는 property로써 module이 내보낼 값을 정의하는 역활을 한다.
*/
// module.exports = {
//     add,
//     sub, //math.js 모듈로 부터 내보내 지는 값 
// }

//ESM 
/**
    package.json에 "type": "module" 을 추가 
    section1 package moduleSystem으로 ESM을 쓰겠다라는 뜻 . 설정 시 CJS 사용 불가
    하단에서 내보낼 값을 선언 할 수도 있지만, 내보낼 값 앞에 export를 사용해서 내보낼 수도 있다.
 */

//ESM 기본 값 내보내기 , 기본값은 1개만 내보낼 수 있다.
export default function multiply(a, b) {
    return a * b
}
//ESM 에서는 export 쓰고 객체안에 내보낼 값 담아주기만 하면 된다.
export { add, sub }