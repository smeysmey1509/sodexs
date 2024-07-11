// Carrer.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialShare from "./SocialShare";
import asd from "../assets/asd.webp";

const Carrer = () => {
  const shareUrl = `http://127.0.0.1:5173/carrer`;
  const image =
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";

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
        <Link to="/carrer/threejs" className="w-full border">
          <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
            <p className="text-lg font-medium">Three.js</p>
            <p className="text-gray-700">
              Three.js is a cross-browser JavaScript library and application
              programming interface (API) used to create and display animated 3D
              computer graphics in a web browser using WebGL.
            </p>
          </div>
        </Link>
        <Link to="/carrer/reactjs" className="w-full border">
          <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
            <p className="text-lg font-medium">React.js</p>
            <p className="text-gray-700">
              React.js is a JavaScript library for building user interfaces. It
              lets you compose complex UIs from small and isolated pieces of
              code called "components".
            </p>
          </div>
        </Link>
        <Link to="/carrer/vuejs" className="w-full border">
          <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
            <p className="text-lg font-medium">Vue.js</p>
            <p className="text-gray-700">
              Vue.js is a progressive JavaScript framework used for building
              user interfaces. It is designed from the ground up to be
              incrementally adoptable.
            </p>
          </div>
        </Link>
        <img src={asd} alt="" />
      </div>
    </>
  );
};

export default Carrer;
