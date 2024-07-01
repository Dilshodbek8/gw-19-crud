import { useEffect, useState } from "react";
import { url } from "../../utils/axios";
import { Link } from "react-router-dom";
export default function Product() {
  let [all, setAll] = useState([]);

  useEffect(() => {
    url.get("/products").then((res) => setAll(res.data));
  }, []);

  const delProd = (id) => {
    url.delete(`/products/${id}`);
  };
  return (
    <div>
      <h1> product</h1>
      {all?.map((p) => (
        <div className="card">
          <h1>{p.nomi}</h1>
          <h4>{p.narxi}</h4>
          <p>{p.rangi}</p>
          <div>
            <button onClick={() => delProd(p._id)}>remove</button>
            <Link to={`/update/${p._id}`}>update</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
