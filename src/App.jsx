import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialShare from "./components/SocialShare";
import LinkPreview from "./components/LinkPreview";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SocialShare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
