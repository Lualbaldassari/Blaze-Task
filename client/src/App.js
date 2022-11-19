import { BrowserRouter, Routes, Route} from "react-router-dom"
import Add from "./components/Add";
import Products from "./components/Products";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/add" element={<Add />} />
          <Route path="/orders" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
