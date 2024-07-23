// Detail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SocialShare, { Metadata } from "./SocialShare";
import Meta from "../components/SocialShare";

const Detail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const shareUrl = window.location.href;
  const title = data.title;
  const description = data.description;
  const image = data.image || "https://via.placeholder.com/150";

  return (
    <>
      <Metadata
        mainTitle={title}
        shareUrl={window.location.href}
        shareTitle={title}
        shareDescription={description}
        shareImage={image}
      />
      <div className="flex flex-col items-center justify-center border p-4">
        <h2 className="text-lg font-medium text-black">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <img src={image} alt={title} className="w-50 h-80" />
      </div>
      <SocialShare
        shareUrl={shareUrl}
        shareQuote={title}
        shareHashtag={title}
      />
    </>
  );
};

export default Detail;
