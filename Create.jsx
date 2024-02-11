import React, { useContext, useState } from "react";
import { ProductCentext } from "../utils/Context";

function Create() {
  const [products, setproducts] = useContext(ProductCentext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setdesc] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();
    const product = {
      title,
      image,
      category,
      price,
      desc,
    };
    setproducts([...products, product]);
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add New Product</h1>
      <input
        type="url"
        placeholder="image-link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[45%] mb-3 "
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[45%] mb-3 "
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        placeholder="Description"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3 "
        onChange={(e) => setdesc(e.target.value)}
        rows="8"
        value={desc}
      />
      <div className="w-1/2">
        <button
          className="py-2 px-5 border rounded border-green-200"
          href="/create"
        >
          Add new Product
        </button>
      </div>
    </form>
  );
}

export default Create;
