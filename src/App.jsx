import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Papers from "./pages/Papers";
import Registration from "./pages/Registration";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";

// Helper: Scrolls to the top of the page on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="call-for-papers" element={<Papers />} />
          <Route path="registration" element={<Registration />} />
          <Route path="committee" element={<Committee />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}