import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Papers from "./pages/authors/Papers";
import ImportantDates from "./pages/authors/ImportantDates";
import Registration from "./pages/Registration";
import Organising from './pages/committee/Organising';
import Advisory from './pages/committee/Advisory';
import Technical from './pages/committee/Technical';
import OurSponsors from './pages/sponsors/oursponsors';
import SponsorshipDetails from './pages/sponsors/SponsorshipDetails';
import Contact from "./pages/Contact";
import Reach from "./pages/Reach"; // <-- Imported the new Reach component

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
      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 text-[#0057b2] text-xs font-bold tracking-wide uppercase">
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
          
          {/* Authors Section Routes */}
          <Route path="authors/important-dates" element={<ImportantDates />} />
          <Route path="authors/call-for-papers" element={<Papers />} />
          <Route path="authors/paper-submission" element={<Placeholder title="Paper Submission Engine" />} />
          
          <Route path="registration" element={<Registration />} />
          
          {/* Committee Routes */}
          <Route path="/committee/organising" element={<Organising />} />
          <Route path="/committee/advisory" element={<Advisory />} />
          <Route path="/committee/technical" element={<Technical />} />

          {/* Sponsors Section Routes */}
          <Route path="/sponsors/our-sponsors" element={<OurSponsors />} />
          <Route path="/sponsors/details" element={<SponsorshipDetails />} />

          <Route path="contact" element={<Contact />} />
          
          {/* How to Reach Route */}
          <Route path="how-to-reach" element={<Reach />} />
          
          {/* New Dropdown Link Routes (Placeholders) */}
          <Route path="program" element={<Placeholder title="Conference Program" />} />
          <Route path="speakers" element={<Placeholder title="Keynote Speakers" />} />
          <Route path="accommodation" element={<Placeholder title="Accommodation" />} />
          
          {/* Catch-all to prevent white screen of death */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}