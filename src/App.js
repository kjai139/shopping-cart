
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Shop } from './Components/Shop';
import { ErrorPage } from './Components/ErrorPage';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' exact element={<Home />} />
        <Route path ='/shop' element={<Shop />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
