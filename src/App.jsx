import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Papers from "./pages/Papers";
import Registration from "./pages/Registration";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Safe fallback for new pages we haven't built yet
const Placeholder = ({ title }) => (
  <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase">
        Under Construction
      </div>
      <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
      <p className="text-slate-500 mt-2">This section will be updated soon.</p>
    </div>
  </div>
);

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
          
          {/* New Dropdown Link Routes */}
          <Route path="authors" element={<Placeholder title="Authors Information" />} />
          <Route path="program" element={<Placeholder title="Conference Program" />} />
          <Route path="speakers" element={<Placeholder title="Keynote Speakers" />} />
          <Route path="sponsors" element={<Placeholder title="Sponsors" />} />
          <Route path="accommodation" element={<Placeholder title="Accommodation" />} />
          
          {/* Catch-all to prevent white screen of death */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}