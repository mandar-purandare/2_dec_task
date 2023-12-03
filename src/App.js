import { Route, Routes } from 'react-router-dom';
import './App.css';
import Invoice from './Invoice';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route exact path='/' element={<Invoice/>}/>
        <Route exact path='/todo' element={<Todo/>}/>
     </Routes>
    </div>
  );
}

export default App;
