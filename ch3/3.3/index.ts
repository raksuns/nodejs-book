import { odd, even } from './var';
import { checkOddOrEven } from './func';

function checkStringOddOrEven(str: string) {
  if (str.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkOddOrEven(10));
console.log(checkStringOddOrEven('hello'));
