import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialShare from "./SocialShare";
import asd from "../assets/asd.webp";
import axios from "axios";

const Carrer = () => {
  const [data, setData] = useState([]);
  const shareUrl = `http://127.0.0.1:5173/carrer`;
  const image =
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const splitString = (str) => {
    const cleanedString = str
      .replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?,.]+/g, "-") // Replace special characters with hyphens
      .toLowerCase(); // Convert to lowercase

    const splitResult = cleanedString
      .split(/\s+/) // Split by spaces
      .filter((item) => item); // Remove any empty strings

    return splitResult.join("-"); // Join with hyphens
  };

  return (
    <>
      <Helmet>
        <title>Kleb Jeb</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content="Title" />
        <meta property="og:description" content={"description"} />
        <meta property="og:image" content={image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={shareUrl} />
        <meta property="twitter:title" content={"title"} />
        <meta property="twitter:description" content={"description"} />
        <meta property="twitter:image" content={image} />
      </Helmet>
      <div className="flex flex-col gap-4 items-center justify-center border">
        <h2 className="p-4 border">Welcome to Carrer</h2>
        <SocialShare />
        {data.map((item, index) => (
          <Link
            key={index}
            to={`/carrer/${splitString(item.title)}`}
            state={{ item }}
            className="w-full border"
          >
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
              <p className="text-lg font-medium">{item.title}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </Link>
        ))}
        <img src={asd} alt="" />
      </div>
    </>
  );
};

export default Carrer;
