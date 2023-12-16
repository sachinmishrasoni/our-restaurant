import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home'
import Menu from './Components/Pages/MenuPage/Menu'
import Cart from './Components/Pages/CartPage/Cart';
import Contact from './Components/Pages/ContactPage/Contact'
import About from './Components/Pages/AboutPage/About'
import Pagenotfound from './Components/Pages/Pagenotfound'
import ViewAllCompo from './Components/Pages/MenuPage/MenuSiblings/ShowAllProcuctCompo';
import ExistProduct from './Components/Pages/MenuPage/MenuSiblings/ExistProduct';
import MyCardDetail from './Components/Pages/HomePage/HomeSiblings/MyCardDetail'
import ExistMyCardDetail from './Components/Pages/MenuPage/MenuSiblings/ExistMyCardDetail';
import ProtectedSignIn from './Components/Pages/SignInPage/ProtectedSignIn';
import UserMyAccount from './Components/Pages/UserPage/UserMyAccount';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/menu' element={<Menu/>} />
          <Route exact path='/menu/:showallproduct' element={<ExistProduct compo={ViewAllCompo}/>}/>
          <Route exact path='/menu/:showallproduct/:singleproduct' element={<ExistMyCardDetail compo={MyCardDetail} />}/>
          <Route exact path='/menu/pagenotfound' element={<Pagenotfound/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/about' element={<About/>}/>
          {/* <Route exact path='/account' element={<ProtectedLogIn compo={UserPage}/>}/> */}
          <Route exact path='/myaccount' element={<ProtectedSignIn UserPage={UserMyAccount}/>}/>
          <Route path='/myaccount' element={<UserMyAccount />}/>
          <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
