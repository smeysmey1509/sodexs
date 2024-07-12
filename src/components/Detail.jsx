import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import SocialShare from "./SocialShare";

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

  console.log('image', image)

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={shareUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Helmet>
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
