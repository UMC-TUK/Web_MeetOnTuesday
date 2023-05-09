import { useState, useEffect } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  // Mounting
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log('Component updated');

    return () => {
      console.log('Component re-mounted cuz of update');
    };
  }, [count]); // count 상태를 의존성 배열에 추가

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Count;
