import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import Display from './components/Display';
import Update from './components/Update';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Create />}></Route>
          <Route path='/disp' element={<Display />}></Route>
          <Route path='/:id' element={<Update />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

