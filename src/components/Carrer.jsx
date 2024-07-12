import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialShare from "./SocialShare";
import asd from "../assets/asd.webp";
import axios from "axios";

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

  const splitString = (str) => {
    const cleanedString = str
      .replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?,.]+/g, "-")
      .toLowerCase();

    const splitResult = cleanedString.split(/\s+/).filter((item) => item);

    return splitResult.join("-");
  };

  console.log("carrer", window.location.href);

  return (
    <>
      <Helmet>
        <title>Carrer</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="Carrer" />
        <meta property="og:description" content="description" />
        <meta property="og:image" content={asd} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={"title"} />
        <meta property="twitter:description" content={"description"} />
        <meta property="twitter:image" content={asd} />
      </Helmet>
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
