import React, { useContext, useEffect, useState } from "react";
import Nav1 from "./Nav1";
import { Link, useLocation } from "react-router-dom";
import { ProductCentext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios1";
function Home() {
  const [products] = useContext(ProductCentext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filter, setfilter] = useState(null);

  let getproductscategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilter(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filter || category == "undefined") setfilter(products);
    if (category != "undefined") getproductscategory();
  }, [category, products]);

  return filter ? (
    <>
      <Nav1 />
      <div className="h-full w-[83%]  p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filter &&
          filter.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[35vh] flex-col flex justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="text-xs hover:text-blue-400">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
