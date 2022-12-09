import React from "react";
import { Route, Switch } from "react-router-dom";
import ShoppingCartPage from "./shoppingcart/ShoppingCartPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import StorePage from "./store/StorePage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={StorePage} />
        <Route path="/shoppingcart" component={ShoppingCartPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
