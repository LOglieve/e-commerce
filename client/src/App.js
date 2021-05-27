import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Nav from './components/nav';
import Footer from './components/footer';
import Shop from './components/shop';
import Basket from './components/basket';

import Login from './components/users/login';
import Register from './components/users/register';
import ProductPage from './components/productPage';

function App() {
  const loggedIn = false;
  return (
    

      <Router>

        <div className="App">

			<Nav />
			<Redirect from = "/" to = "/shop" />

			<div>

				<Route path = "/shop"><Shop  category = "Cat"/></Route>
				<Route path = "/basket"><Basket /></Route>
				<Route path = "/login"><Login /></Route>
				<Route path = "/register"><Register /></Route>
				<Route path = "/product/:productId"><ProductPage /></Route>

          	</div>

          

          

          <Footer />

        </div>

      </Router>


    
  );
}

export default App;
