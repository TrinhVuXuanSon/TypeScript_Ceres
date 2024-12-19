import React from "react";

type CountProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

function Count({count, setCount} : CountProps ) {
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default Count;
