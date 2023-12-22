import { useEffect } from 'react';
import trash from '../../../assets/trash.png'
import './todolist.css'

type TodolistType = {
  todoList: string[];
  checkedList: string[];
  setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
  setCheckedList: React.Dispatch<React.SetStateAction<string[]>>;
}

function TodoList({ todoList, checkedList, setTodoList, setCheckedList }: TodolistType) {

  function handleCheck(currentTask: string) {
    if (checkedList.includes(currentTask)) {
      const newChecked = checkedList.filter((c) => c !== currentTask);
      setCheckedList(newChecked);
    } else {
      setCheckedList((prev) => [...prev, currentTask]);
    }
  }

  function handleDelete(deletedTask: string) {
    const newTodoList = todoList.filter((d) => d !== deletedTask);
    setTodoList(newTodoList)
  }

  useEffect(() => {
    function organizelist() {
      const notChecked = todoList.filter((t) => !checkedList.includes(t));
      const checked = todoList.filter((t) => checkedList.includes(t));
      setTodoList([...notChecked, ...checked])
    }
    organizelist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedList])

  return (
    <>
      {todoList.length > 0 && (
        <div>
          {todoList.map((task, index) => (
            <div className='task' key={index}>
              <div>
                <input
                  checked={checkedList.includes(task)}
                  name={task}
                  onChange={() => handleCheck(task)}
                  type="checkbox"
                />
                <strong>{task}</strong>
              </div>
              <div>
                <button onClick={() => handleDelete(task)}>
                  <img src={trash} alt="trash_can" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default TodoList;
