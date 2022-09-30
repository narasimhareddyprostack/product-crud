import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import ProductAdmin from "./components/products/ProductAdmin";
import ProductList from "./components/products/ProductList";
import UpdateProduct from "./components/products/UpdateProduct";
import CreateProduct from "./components/products/CreateProduct";

let App = () => {

    return(
        <React.Fragment>
           <Router>
               <Navbar/>
               <Switch>
                   <Route exact path="/" component={Home}/>
                   <Route exact path='/products' component={ProductList}/>
                   <Route exact path='/admin' component={ProductAdmin}/>
                   <Route exact path='/create-product' component={CreateProduct}/>
                   <Route exact path='/update-product/:id' component={UpdateProduct}/>
               </Switch>
           </Router>

        </React.Fragment>
    );
};
export default App;
