import { odd, even } from './var';

function checkOddOrEven(num: number) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

export { checkOddOrEven };
