import { BrowserRouter, Routes, Route} from "react-router-dom"
import Orders from "./components/Orders";
import Products from "./components/Products";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
