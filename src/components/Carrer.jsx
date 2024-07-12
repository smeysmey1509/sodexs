import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialShare from "./SocialShare";
import asd from "../assets/asd.webp";
import axios from "axios";
import Meta from "./Meta";

const Carrer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Meta mainTitle='Carrer' shareUrl={window.location.href} shareTitle='Carrer'/>
      <div className="flex flex-col gap-4 items-center justify-center border">
        <h2 className="p-4 border">Welcome to Career</h2>
        <SocialShare shareUrl={window.location.href} />
        {data?.map((item, index) => (
          <Link
            key={index}
            to={`/carrer/${item.id}`}
            state={{ item }}
            className="w-full border"
          >
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
              <p className="text-lg font-medium">{item.title}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </Link>
        ))}
        <img src={asd} alt="Career" />
      </div>
    </>
  );
};

export default Carrer;
