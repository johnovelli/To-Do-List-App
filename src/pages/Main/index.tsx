import { useState, useEffect } from 'react';
import TextInput from '../../components/TextInput';
import TodoList from '../../components/TextInput/TodoList';
import './main.css'

function Main() {
  const [language, setLanguage] = useState<'Pt_br' | 'Eng_us'>('Pt_br');
  const [todoList, setTodoList] = useState<string[]>([]);
  const [checkedList, setCheckedList] = useState<string[]>([]);

  function togglePtBr() {
    setLanguage('Pt_br')
  }

  function toggleEngUs() {
    setLanguage('Eng_us')
  }

  return (
    <div className='main'>
      <div className='to-do-list'>
        <div className='language'>
          <button onClick={togglePtBr}>Pt</button>
          <button onClick={toggleEngUs}>En</button>
        </div>
        <h2>{language === 'Pt_br' ? (
          'Quais os planos para hoje ?'
        ) : (
          'What are the plans for today?'
        )}</h2>
        <TextInput
        language={language}
        todoList={todoList}
        setTodoList={setTodoList}
        />
        <TodoList 
        todoList={todoList}
        checkedList={checkedList}
        setTodoList={setTodoList}
        setCheckedList={setCheckedList}
        />
      </div>
    </div>
  );
}

export default Main;
