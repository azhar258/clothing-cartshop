import "./App.css";
import HomePage from "./components/pages/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
