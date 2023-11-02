//ESM
import { add, sub } from "./math.js";
import mulmul from "./math.js";

/*
    동일한 경로일 때는 import mulmul, {add,sub} from "./math.js"로 작성 가능
    기본값은 1개 이므로 아무 이름을 써도 불러 올 수 있다.
    기본값을 불러올 때는 {} 없이 사용.
*/

console.log(add(1, 2)); //3
console.log(sub(1, 2)); // -1
console.log(mulmul(10, 25)); //250