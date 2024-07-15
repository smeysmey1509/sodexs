import React, { useEffect, useState } from "react";
import SocialShare, { Metadata } from "./SocialShare";
import axios from "axios";
import { Link } from "react-router-dom";

const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://api.escuelajs.co/api/v1/products")
        .then((res) => setData(res?.data))
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div class="relative overflow-x-auto">
      <Metadata mainTitle="About" shareUrl={window.location.href} />
      <SocialShare shareUrl={window.location.href} shareQuote="About" />
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <Link to={`/about/${item.id}`}>
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                ></th>
                <td className="px-6 py-4">${item?.price}</td>
              </tr>
              {item?.title}
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default About;
