import './App.css';
import ClassComponents from './components/ClassComponents';
import Pagination from './components/Pagination';
import TodoList from './redux/TodoList';

function App() {
  return (
    <div className="App">
     <h1> React Basics</h1>
     {/* <ClassComponents/> */}
     {/* <Pagination /> */}
     <TodoList/>
    </div>
  );
}

export default App;
