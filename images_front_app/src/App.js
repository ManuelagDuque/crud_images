import Home from './components/Home';
import Form from './components/Form';
import Edit from './components/Edit';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Form />}/>
          <Route path='/edit/:id' element={<Edit />}/>
      </Routes>
    </div>
  );
}

/**var cors = require('cors')*/

export default App;
