const BinaryDevider = () => {};
interface NumberEqutionProps {
  numberA: string;
  numberB: string;
  result: string;
  higherIndex: string[][];
}

export const NumberEqution = ({
  numberA,
  numberB,
  result,
  higherIndex,
}: NumberEqutionProps) => {
  return (
    <div className='numberEquation'>
      <div className="higherIndex">
        {higherIndex.map((index) => (
          <p>{index.join()}</p>
        ))}
      </div>
      <p>{result}</p>
    </div>
  );
};

export { BinaryDevider };
