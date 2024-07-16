import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAPI = () => {
  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  };
  return <div></div>;
};

export default GetAPI;
