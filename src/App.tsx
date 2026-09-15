import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Weddings from "./pages/Weddings";
import Banquets from "./pages/Banquets";
import Events from "./pages/Events";
import Stays from "./pages/Stays";
import Dining from "./pages/Dining";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cancellation from "./pages/Cancellation";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  return (
    <>
      <LoadingScreen />
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/banquets" element={<Banquets />} />
            <Route path="/events" element={<Events />} />
            <Route path="/stays" element={<Stays />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/cancellation-policy" element={<Cancellation />} />
            <Route path="/booking-policy" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
}
