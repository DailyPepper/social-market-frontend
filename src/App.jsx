import {Routes, Route} from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import LoginForm from './components/login/LoginForm'
import SignupForm from './components/login/SignupForm'
import FavScreen from './pages/FavScreen'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import SneakerPage from './pages/SneakerPage'
import ProductPage from './pages/ProductPage'

function App() {
  return(
    <div className='font-ralewayFont'>
      <Routes>
        <Route path='/' element={<HomeScreen/>} ></Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path='/sneaker' element={<SneakerPage/>}></Route>
        <Route path='/fav' element={<FavScreen/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/product/:id' element={<ProductPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
