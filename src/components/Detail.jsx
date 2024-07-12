// Detail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import SocialShare from "./SocialShare";
import Meta from "./Meta";

const updateMetaTags = (title, description) => {
  document.title = title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  } else {
    const metaTag = document.createElement("meta");
    metaTag.name = "description";
    metaTag.content = description;
    document.head.appendChild(metaTag);
  }
};

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
        updateMetaTags(response?.data?.title, response?.data?.description, response?.data?.image);
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
      <Meta
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
