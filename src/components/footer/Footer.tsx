import Iconbar from "../iconbar/Iconbar";
import mcLogo from "/img/mcdonalds.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-50 py-7 overflow-hidden rounded-t-[50px]">
      <Link to={"/"}>
        <img src={mcLogo} alt="Mc logo" width={90} className="py-7" />
      </Link>
      <div className="w-screen px-30">
        <Iconbar />
      </div>
    </footer>
  );
};

export default Footer;
