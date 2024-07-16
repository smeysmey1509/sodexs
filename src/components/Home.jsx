import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [popup, setPopup] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  };

  const togglePopup = (productId = null) => {
    setSelectedProductId(productId);
    setPopup(!popup);
    setName("");
    setDescription("");
    if (productId) {
      const selectedProduct = data.find((product) => product.id === productId);
      if (selectedProduct) {
        setName(selectedProduct.title);
        setDescription(selectedProduct.description);
      }
    }
  };

  const addProduct = (product) => {
    axios
      .post("https://fakestoreapi.com/products", product)
      .then((response) => {
        setData([...data, response.data]);
      })
      .catch((error) => console.error(error));
  };

  const updateProduct = (id, updatedProduct) => {
    axios
      .put(`https://fakestoreapi.com/products/${id}`, updatedProduct)
      .then(() => {
        const updatedProducts = data.map((product) =>
          product.id === id ? { ...product, ...updatedProduct } : product
        );
        setData(updatedProducts);
      })
      .catch((error) => console.error(error));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedProductId) {
      const updatedProduct = {
        title: name,
        description,
      };
      updateProduct(selectedProductId, updatedProduct);
    } else {
      const newProduct = {
        title: name,
        description,
        price: 0,
        category: "electronics",
        image: "https://i.pravatar.cc",
      };
      addProduct(newProduct);
    }
    togglePopup();
  };

  // Delete a product
  const deleteProduct = (id) => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        const updatedProducts = data.filter((product) => product.id !== id);
        setData(updatedProducts);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <button
            className="text-1xl p-2 bg-black text-white"
            onClick={() => togglePopup()}
          >
            Add
          </button>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Description</th>
                <th></th>
              </tr>
              {data?.map((product, index) => (
                <tr className="border-b hover:bg-orange-100" key={index}>
                  <td className="p-3 px-5">{product.title}</td>
                  <td className="p-3 px-5">{product.description}</td>
                  <td className="p-3 px-5 flex justify-end">
                    <button
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => togglePopup(product.id)}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {popup && (
        <div className="w-full h-full flex items-center justify-center fixed top-0 left-0 bg-gray-800 bg-opacity-50">
          <form className="bg-white p-4 rounded" onSubmit={handleFormSubmit}>
            <div className="mb-2">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label>Description:</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              {selectedProductId ? "Update" : "Submit"}
            </button>
            <button
              type="button"
              className="bg-red-500 text-white p-2 rounded ml-2"
              onClick={togglePopup}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Home;
