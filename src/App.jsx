import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("./components/Home"));
const Carrer = lazy(() => import("./components/Carrer"));
const About = lazy(() => import("./components/About"));
const Detail = lazy(() => import("./components/Detail"));

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrer" element={<Carrer />} />
            <Route path="/carrer/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
};

export default App;
