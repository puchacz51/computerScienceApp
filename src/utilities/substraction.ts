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
  const higherIndex = Array(lengthA).fill([]) as string[][];

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
        console.log(j);
        console.log(numberA[j], 'll');

        if (numberA[j] === '1') {
          numberA[j] = '0';
          higherIndex[j].push('0');
          result.push('1');

          while (j++ <= indexA) {
            numberA[indexA] = '1';
            higherIndex[j].push('2');
            console.log(numberA, 'numberA');
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

  return {
    result: result.reverse().join(''),
    higherIndex,
  };
};
