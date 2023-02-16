import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const onChangeHandler = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo !== '') {
      setTodoList((currentArray) => [todo, ...currentArray]);
      setTodo('');
    }
    console.log(todoList);
  };

  return (
    <div>
      <h1> 나의 Todo List {todoList.length}</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChangeHandler} />
        <button>작성</button>
      </form>
      <hr />
      <div>
        {todoList.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
