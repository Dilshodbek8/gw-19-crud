import { useForm } from "react-hook-form";
import { url } from "../../utils/axios";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function UpdateProduct() {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();

  useEffect(() => {
    url.get(`/products/${id}`).then((res) => reset(res?.data));
  }, []);
  const nav = useNavigate();
  const createProduct = (data) => {
    let { _id, ...oth } = data;
    url.put(`/products/${id}`, oth).then((res) => {
      toast.success("product updated !");
      nav("/products");
    });
  };
  return (
    <div>
      <h1>create new product</h1>
      <form onSubmit={handleSubmit(createProduct)}>
        <input type="text" placeholder="nomi" {...register("nomi")} />
        <input type="text" placeholder="narxi" {...register("narxi")} />
        <input type="text" placeholder="rangi" {...register("rangi")} />
        <button>add</button>
      </form>
    </div>
  );
}
