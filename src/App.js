import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './Home';
import Detail from './Detail';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/Movie-Api' element={<Home/>}></Route>
          <Route path='/Detail/:id' element={<Detail/>}></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
