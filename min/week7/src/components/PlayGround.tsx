import React, { useState } from 'react';

function PlayGroundComponent() {
  const [count, setCount] = useState<number>(0);

  const onClickAdd = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>컴포넌트입니당</h3>
      <div>{count}</div>
      <button style={{ marginRight: '1rem' }} onClick={onClickAdd}>
        카운트 증가
      </button>
      <button onClick={onClickMinus}>카운트 감소</button>
    </>
  );
}

export default PlayGroundComponent;
