import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieListing from "./pages/MovieListing";
import { Toaster } from "react-hot-toast";
import WatchlistPage from "./pages/WatchlistPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
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
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 2500,
        }}
      />
    </div>
  );
};

export default App;
