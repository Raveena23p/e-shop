import Navbar from './components/navbar/navbar';
import './App.css';

import SignUp from './components/signup/signup'
import SignIn from './components/Sign in/signin';
import Shipment from './components/Shipment/shipment';
import ProductCard from './components/Product card/ProductCard';
import ProductList from './components/ProductList/ProductList';
import ProductPage from './components/Productpage/ProductPage';
import AddProduct from './components/AddProduct/AddProduct';
import Modify from './components/Modify/Modify';
import Addition from './components/Addition/Addition';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignUp/>
      <SignIn/>
      <Shipment/>
      <ProductList/>
      <ProductPage/>
      <AddProduct/>
      <Modify/>
      <Addition/>

    </div>

  );
}
export default App;
