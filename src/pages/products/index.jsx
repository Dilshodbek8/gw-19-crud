import { url } from "../../utils/axios";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../main";
export default function Product() {
  const mutation = useMutation({
    mutationFn: (id) => url.delete(`/products/${id}`),
  });
  const delProd = (id) => {
    mutation.mutate(id, {
      onSuccess: () => queryClient.invalidateQueries(["/produktlar"]),
    });
  };

  const getData = () => url.get("/products").then((res) => res.data);
  const { data, isLoading, refetch } = useQuery(["/produktlar"], getData);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 onClick={() => refetch()}> product</h1>
      {data?.map((p) => (
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
