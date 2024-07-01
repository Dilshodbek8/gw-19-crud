import { useForm } from "react-hook-form";
import { url } from "../../utils/axios";
import { toast } from "react-toastify";
export default function CreateProduct() {
  const { register, handleSubmit, reset } = useForm();

  const createProduct = (data) => {
    url.post("/products", data).then((res) => {
      reset();
      toast.success("product created !");
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
