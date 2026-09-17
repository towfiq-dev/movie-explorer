import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";
import Home from "./pages/Home";
import MovieListing from "./pages/MovieListing";
import WatchlistPage from "./pages/WatchlistPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  if (initialLoading) {
    return <PreLoader onComplete={() => setInitialLoading(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieListing />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />

      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
    </div>
  );
};

export default App;