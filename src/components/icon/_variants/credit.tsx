export function Credit(props: { size: 20 | 16 }) {
  const specificationTable = {
    20: {
      width: 20,
      height: 16,
      viewBox: "0 0 22 17",
      d1: "M19.1818 1H2.81818C1.81403 1 1 1.81403 1 2.81818V13.7273C1 14.7314 1.81403 15.5455 2.81818 15.5455H19.1818C20.186 15.5455 21 14.7314 21 13.7273V2.81818C21 1.81403 20.186 1 19.1818 1Z",
      d2: "M1 6.45435H21"
    },
    16: {
      width: 16,
      height: 14,
      viewBox: "0 0 18 14",
      d1: "M15.5455 1H2.45455C1.65122 1 1 1.65122 1 2.45455V11.1818C1 11.9851 1.65122 12.6364 2.45455 12.6364H15.5455C16.3488 12.6364 17 11.9851 17 11.1818V2.45455C17 1.65122 16.3488 1 15.5455 1Z",
      d2: "M1 5.36353H17"
    }
  };
  const specs = specificationTable[props.size];
  return (
    <div className="grid place-items-center w-6 h-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={specs.width}
        height={specs.height}
        viewBox={specs.viewBox}
        fill="none"
      >
        <path d={specs.d1} stroke="#B5AA9C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={specs.d2} stroke="#B5AA9C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
