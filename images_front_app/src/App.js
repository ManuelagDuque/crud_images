import Home from './components/Home';
import Form from './components/Form';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Form />}/>
      </Routes>
    </div>
  );
}

/**var cors = require('cors')*/

export default App;
