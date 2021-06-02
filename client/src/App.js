import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { useSelector, connect } from "react-redux";

import Nav from './components/nav';
import Footer from './components/footer';
import Shop from './components/shop/shop';
import Basket from './components/basket/basket';

import Login from './components/users/login';
import Register from './components/users/register';
import ProductPage from './components/shop/productPage';

function App(props) {
	const loggedIn = useSelector(state => state.user.logged_in);

  const containerStyle = {
	  backgroundColor: 'red',
	  paddingBottom: '50px'
  }

  

  const logout = () => {

  }



  return (
    

      <Router>

        <div className="App flex">

			<Nav />
			<Redirect from = "/" to = "/shop" />

			<div className = "container" style = {containerStyle}> 

				<Route path = "/shop"><Shop  category = "Cat"/></Route>
				<Route path = "/basket"><Basket /></Route>

				{
				(loggedIn === false) ? <div><Route path = "/login"><Login /></Route>
				<Route path = "/register"><Register /></Route></div>: "" 
				}
				
				
				<Route path = "/product/:productId"><ProductPage /></Route>

          	</div>

          

          

          

        </div>
		<Footer />

      </Router>


    
  );
}

export default connect()(App);
