import { Routes, Route, Link } from "react-router-dom";
import Product from "./pages/products";
import UpdateProduct from "./pages/update";
import CreateProduct from "./pages/create";

function App() {
  return (
    <div>
      <Link to={"/products"}>all products</Link>
      <br />
      <br />
      <Link to={"/create"}>new product</Link>
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
