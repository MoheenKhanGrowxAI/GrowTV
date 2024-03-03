import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Channels from "./pages/channels/Channels";
import Teams from "./pages/Teams/Teams";
import { AnimatePresence } from "framer-motion";
import Contact from "./pages/Contact/Contact";

function AuthNavigator() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AuthNavigator;
