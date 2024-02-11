import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios1";
import Loading from "./Loading";

function Details() {
  const [product, setproduct]=useState(null);
  const { id } = useParams();
  
  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getsingleproduct();
  }, []);
  return (
    product ?
    (
    <div className="w-[70%] flex h-full justify-between  m-auto p-[10%]">
      <img className="object-contain h-[80%] w-[40%]" src={product.image}></img>

      <div className="content w-[50%]">
        <h1 className="text-3xl mb-3">{product.title}</h1>
        <h3 className=" font-bold text-zinc-400 my-5">{product.category}</h3>

        <h2 className="font-bold text-red-300 mb-3">$ {product.price}</h2>
        <p className="mb-[7%]">
          {" "}
         {product.description}
        </p>
        <Link className="mr-5 py-2 px-5 border rounded border-blue-200 text-blue-400">
          Edit
        </Link>
        <Link className="py-2 px-5 border rounded border-red-200 text-red-400">
          Delete
        </Link>
      </div>
    </div>)
  : <Loading/>);
}

export default Details;
