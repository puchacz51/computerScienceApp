
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
  const higherIndex: string[][][]=[];
  let heightIndex = 0;

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
      console.log(heightIndex, 22);
      const tempArray = Array(lengthA)
        .fill(0)
        .map((_) => [] as string[]);
      while (--j >= 0) {
        if (numberA[j] === '1') {
          numberA[j] = '0';
          console.log(j, 'xxx');
          tempArray[j].push('0');
          result.push('1');
          while (++j <= indexA) {
            console.log(j, 'llll', indexA);
            numberA[j] = '1';
            tempArray[j].push('2');
            tempArray[j].push('1');
            console.log(numberA, 'numberA');
          }
          break;
        }
      }
      heightIndex++;
      higherIndex.push(tempArray);
    }
  }
  indexA = lengthDiff;
  while (indexA--) {
    result.push(numberA[indexA]);
  }
  console.log('polska');

  return {
    result: result.reverse().join(''),
    higherIndex,
  };
};
// [[0],[2,1],[2,1]]
