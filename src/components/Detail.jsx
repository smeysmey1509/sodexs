// Detail.js

import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import asd from "../assets/asd.webp";

const details = {
  threejs: {
    title: "Three.js",
    description:
      "Three.js is a cross-browser JavaScript library and application programming interface (API) used to create and display animated 3D computer graphics in a web browser using WebGL.",
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
  reactjs: {
    title: "React.js",
    description:
      "React.js is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'.",
    image: "https://reactjs.org/logo-og.png",
  },
  vuejs: {
    title: "Vue.js",
    description:
      "Vue.js is a progressive JavaScript framework used for building user interfaces. It is designed from the ground up to be incrementally adoptable.",
    image: "https://vuejs.org/images/logo.png",
  },
};

const Detail = () => {
  const { detail } = useParams();
  const detailData = details[detail];

  return (
    <>
      <Helmet>
        <title>{detailData.title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={detailData.title} />
        <meta property="og:description" content={detailData.description} />
        <meta property="og:image" content={detailData.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={detailData.title} />
        <meta property="twitter:description" content={detailData.description} />
        <meta property="twitter:image" content={detailData.image} />
      </Helmet>
      <div className="flex flex-col items-center justify-center border p-4">
        <h2 className="text-lg font-medium">{detailData.title}</h2>
        <p className="text-gray-700">{detailData.description}</p>
        <img src={detailData.image} alt={detailData.title} />
      </div>
    </>
  );
};

export default Detail;
