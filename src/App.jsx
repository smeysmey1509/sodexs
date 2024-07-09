import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import SocialShare from "./components/SocialShare";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/:menu_id/:detail_page/:detail_page_id"
          element={<SocialShare />}
        />
      </Routes>
    </BrowserRouter> 
  );
};

export default App;
