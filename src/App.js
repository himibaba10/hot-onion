import { Route, Routes } from 'react-router-dom';
import './App.css';
import useAuth from './hooks/useAuth';
import Cart from './Pages/Cart/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import FoodDetail from './Pages/FoodDetail/FoodDetail';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import AllFoods from './Pages/Shop/AllFoods/AllFoods';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/shop" element={<AllFoods/>}/>
        {!user && <Route path="/login" element={<Login/>}/>}
        {!user && <Route path="/signUp" element={<SignUp/>}/>}
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>}/>
        <Route path="/food/:foodName" element={<FoodDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
