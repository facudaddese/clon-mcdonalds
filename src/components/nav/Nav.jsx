import { useState, useEffect } from "react";
import Iconbar from "../iconbar/Iconbar";
import "./Nav.css";
import { useLocation } from "react-router-dom";

const thresholds = {
  "/": { desktop: 1400, w1024: 2700, w768: 3800, w600: 5000, w425: 9800 },
  mccombos: { w1024: 2800, w768: 3550, w600: 5200, w425: 10300 },
  hamburguesas: { w1024: 2000, w768: 2700, w600: 4000, w425: 7500 },
  "pollo-y-mcnuggets": { w1024: 710, w768: 1100, w600: 1500, w425: 2700 },
  "cajita-feliz": { w1024: 800, w768: 650, w600: 1000, w425: 8500 },
  "para-acompanar": { w1024: 1100, w768: 1100, w600: 1850, w425: 3500 },
  mcshakes: { w1024: 400, w768: 650, w600: 650, w425: 1500 },
  postres: { w1024: 1500, w768: 1900, w600: 2800, w425: 5500 },
  ensaladas: { w1024: 420, w768: 400, w600: 350, w425: 280 },
  bebidas: { w1024: 750, w768: 1100, w600: 1500, w425: 2700 },
};

const Nav = () => {
  const [isSticky, setIsSticky] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const getKey = () => {
      if (location.pathname === "/") return "/";
      return location.pathname.split("/").pop();
    };

    const getScroll = () => {
      if (!thresholds[getKey()]) return Infinity;

      if (window.innerWidth < 425) return thresholds[getKey()].w425;
      if (window.innerWidth < 600) return thresholds[getKey()].w600;
      if (window.innerWidth < 768) return thresholds[getKey()].w768;
      if (window.innerWidth < 1024) return thresholds[getKey()].w1024;

      return thresholds[getKey()].desktop ?? Infinity;
    };

    const handleScroll = () => {
      setIsSticky(window.scrollY < getScroll());
    };

    handleScroll(); // corre una vez al montar/cambiar de página
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  return (
    <nav
      className={`flex justify-center items-center overflow-hidden sticky px-30 top-0 z-1000 bg-gray-50 rounded-b-[50px] transition-transform duration-300 ease-in-out ${
        isSticky ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Iconbar />
    </nav>
  );
};

export default Nav;
