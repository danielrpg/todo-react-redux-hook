import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './actions/todo';

const App = () => {

  const tasks = useSelector(state => state.todo);

  const dispatch = useDispatch();

  const save = (ev) => {
    ev.preventDefault();
    const value = ev.target.task.value;
    console.log(`you are saving ${value}`);
    dispatch(addItem(value));
  }

  const deleteItem = (id) => {
    console.log(`your are removing ${id}`);
    dispatch(removeItem(id));
  }

  return (
    <div className="App">
     <header className="App-header">
       <form onSubmit={(ev) => {save(ev)}}>
        <input type='text' name='task'/>
        <button>Guardar</button>
       </form>
       <div>
         <ul>
           {
             tasks.map((item) => {
              return <li key={item.id}>
                {item.value} 
                <button onClick={() => deleteItem(item.id)}> Remove </button>
              </li>
             })
           }
         </ul>
       </div>
     </header>
    </div>
  );
}

export default App;
