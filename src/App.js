
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Shop } from './Components/Shop';
import { ErrorPage } from './Components/ErrorPage';
import { NavBar } from './Components/NavBar';
import { useEffect, useState } from 'react';
import { ItemDetails } from './Components/ItemDetails';
import { Cart } from './Components/Cart';

function App() {

  const [events, setEvents] = useState([])

  const [cartNum, setCartNum] = useState(0)

  const [cartItems , setCartItems] = useState([])
    

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
      <NavBar cartNum = {cartNum} />
      <Routes>
        <Route path='/' element={<Home events={events}/>} />
        <Route path='/home' exact element={<Home events={events} />} />
        <Route path ='/shop' element={<Shop cartNum = {cartNum} />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/shop/:id' element={<ItemDetails cartNum = {cartNum} setCartNum = {setCartNum} cartItems = {cartItems} setCartItems = {setCartItems}/>} />
        <Route path='/cart' element={<Cart cartNum = {cartNum} setCartNum = {setCartNum} cartItems = {cartItems} setCartItems = {setCartItems} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
