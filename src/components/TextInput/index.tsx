import { useState } from 'react';
import './text-input.css'

type TextInputType = {
  language: "Pt_br" | "Eng_us",
  checkedList: string[];
  setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
}

function TextInput({ language, setTodoList }: TextInputType) {
  const [inputText, setInputText] = useState<string>("");
  
  function handleAdd() {
    if (inputText === "") {
      window.alert("Digite uma tarefa");
      return false;
    }
    setTodoList((prev) => [...prev, inputText]);
    setInputText("");
  }

  return (
    <div className='text-input'>
      <input 
      onChange={(e) => setInputText(e.target.value)}
      type='text'
      placeholder={language === 'Pt_br' ? 'Digite uma tarefa' : 'Type a task'}
      value={inputText}
      />
      <button onClick={handleAdd}><strong>Add</strong></button>
    </div>
  );
}

export default TextInput;
