export const substraction = (numberA: string[], numberB: string[]) => {
  // if length a is smaller than length b
  if (numberA.length < numberB.length)
    return { result: null, higherIndex: null };

  const lengthB = numberB.length;
  const lengthA = numberA.length;
  const lengthDiff = lengthA - lengthB;
  let indexB = lengthB;
  let indexA: number;
  const result: string[] = [];
  const higherIndex: string[][] = Array.from(Array(lengthA), () => []);
  console.log(higherIndex);

  while (indexB--) {
    indexA = indexB + lengthDiff;
    // if a bit = 1 b bit =0 result = 1
    if (numberA[indexA] > numberB[indexB]) {
      result.push('1');
      // if a bit = 0 b bit =1 result = 1
    } else if (numberA[indexA] === numberB[indexB]) {
      result.push('0');
    } else {
      // if a bit = 0 b bit =1 result = 1
      let j = indexA;
      // find first older bit with 1 value

      while (--j >= 0) {
        if (numberA[j] === '1') {
          numberA[j] = '0';
          higherIndex[j].push('0');
          result.push('1');
          while (++j <= indexA) {
            numberA[j] = '1';
            higherIndex[j].push('2', '1');
          }
          break;
        }
      }
    }
  }
  indexA = lengthDiff;
  while (indexA--) {
    result.push(numberA[indexA]);
  }
  console.log(higherIndex);

  return {
    result: result.reverse().join(''),
    higherIndex,
  };
};
// [[0],[2,1],[2,1]]
