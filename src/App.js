
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Shop } from './Components/Shop';
import { ErrorPage } from './Components/ErrorPage';
import { NavBar } from './Components/NavBar';
import { useEffect, useState } from 'react';

function App() {

  const [events, setEvents] = useState([])

  useEffect( () => {
      const fetchData = async () => {
          const data = await fetch('https://valorant-api.com/v1/bundles')
          const json = await data.json()

          console.log(json)
          setEvents(json.data)
          

      }

      fetchData().catch(console.error)
      
      
  }, [])

  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home events={events}/>} />
        <Route path='/home' exact element={<Home events={events} />} />
        <Route path ='/shop' element={<Shop />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
