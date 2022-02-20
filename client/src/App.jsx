import HomePage from './pages/Home/HomePage'
import ProductList from './pages/ProductList/ProductList'
import ProductPage from './pages/ProductPage/ProductPage'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  
} from "react-router-dom";
import Success from './pages/SuccessPage/Success'
import { useSelector } from 'react-redux'
function App() {

  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
         
        <Route path="/login">
          {user ?  <Redirect to ='/'/> : <Login/>}
          
        </Route>
        <Route path="/register">
        {user ?  <Redirect to ='/'/> : <Register/>}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
