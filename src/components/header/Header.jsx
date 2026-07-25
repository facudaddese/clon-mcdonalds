import "./Header.css";
import mcLogo from "../../../public/img/mcdonalds.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-100 header">
      <Link to={"/"}>
        <img src={mcLogo} alt="Mc logo" width={80} className="ml-10 pt-10" />
      </Link>
      <h1 className="text-[60px] ml-10 pt-30 text-amber-50 font-bold">
        Elige tu combo del día
      </h1>
    </header>
  );
};

export default Header;
