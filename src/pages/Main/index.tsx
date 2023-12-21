import TextInput from '../../components/TextInput';
import './main.css'

function Main() {
  return (
    <div className='main'>
      <div className='to-do-list'>
        <h2>Quais os planos para hoje ?</h2>
        <TextInput />
      </div>
    </div>
  );
}

export default Main;
