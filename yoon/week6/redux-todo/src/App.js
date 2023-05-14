import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './redux/modules/todos';
import './App.css';

function App() {
  const [goal, setGoal] = useState('');

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onBtnClickHandler = () => {
    if (goal === '') {
      alert('할 일을 입력해주세요');
      return;
    } else {
      dispatch(addTodo(goal));
      setGoal('');
    }
  };

  return (
    <div id="wrap">
      <section id="form">
        <span>할 일 입력하기</span>
        <input
          type="text"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
        />
        <button onClick={onBtnClickHandler}>추가하기</button>
      </section>
      <section id="cards">
        {todos.map((item) => {
          return (
            <div className="card" key={item.id}>
              {item.todo}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
