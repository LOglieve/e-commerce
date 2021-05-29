import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Nav from './components/nav';
import Footer from './components/footer';
import Shop from './components/shop/shop';
import Basket from './components/basket/basket';

import Login from './components/users/login';
import Register from './components/users/register';
import ProductPage from './components/shop/productPage';

function App() {
  const loggedIn = false;

  const containerStyle = {
	  backgroundColor: 'red',
	  paddingBottom: '50px'
  }

  return (
    

      <Router>

        <div className="App flex">

			<Nav />
			<Redirect from = "/" to = "/shop" />

			<div className = "container" style = {containerStyle}> 

				<Route path = "/shop"><Shop  category = "Cat"/></Route>
				<Route path = "/basket"><Basket /></Route>
				<Route path = "/login"><Login /></Route>
				<Route path = "/register"><Register /></Route>
				<Route path = "/product/:productId"><ProductPage /></Route>

          	</div>

          

          

          

        </div>
		<Footer />

      </Router>


    
  );
}

export default App;
