type numberValidator = (num: string | undefined) => string;

export const binaryNumbVal: numberValidator = (num) => {
  if (!num){
    throw new Error('empty ')
  }
  const binaryRegx = new RegExp('^[01]*$');
  if (!binaryRegx.test(num)) {
    throw new Error('invalid character in number');
  }

  const binaryRegx1 = new RegExp('1[01]*');
  const result = binaryRegx1.exec(num);

  if (result?.index===undefined) {
    throw new Error('invalid number');
  }
  const { index } = result;
  return num.slice(index);
};
