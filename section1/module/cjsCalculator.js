//CJS 
const moduleData = require("./math");
//구조 분해 할당으로 const {add, sub} = require("./math") 해도 된다.
/*
    require - Node.js에서 기본적으로 제공하는 내장함수 이므로 별도의 선언없이 사용
              인수로 전달한 경로에 위치한 module에서 내보낸 값을 가져온다.
*/
console.log(moduleData) // {add: [Function:add], sub: [Function: sub]}
console.log(moduleData.add(1, 2)); //3
console.log(moduleData.sub(1, 2)); //-1

/*
    math.js 모듈에 있는 값 or 함수를 가져다 쓰고 싶을 경우 
    math.js 모듈에서는 해당 값을 내보내 주어야 하고 
    calculator.js 모듈 에서는 내보내 준 해당 값을 가져와야 한다.
    모듈에서 값을 내보내고 다른 모듈로 부터 값을 가져오는 것 => ModuleSystem
*/