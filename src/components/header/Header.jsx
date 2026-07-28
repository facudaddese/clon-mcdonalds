import "./Header.css";
import mcLogo from "/img/mcdonalds.svg";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import { useState } from "react";

const Header = ({ cart, deleteProducts }) => {
  const [activeCart, setActiveCart] = useState(false);

  const handleActive = () => {
    setActiveCart(!activeCart);
  };

  return (
    <header className="h-100 header">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <img src={mcLogo} alt="Mc logo" width={80} className="ml-10 pt-10" />
        </Link>
        <div>
          <span
            className="material-symbols-outlined mr-10 text-yellow-400 cursor-pointer transition-transform duration-300 ease-out hover:scale-125"
            style={{ fontSize: "35px" }}
            onClick={handleActive}
          >
            shopping_cart
          </span>
          <div>
            <Cart
              cart={cart}
              activeCart={activeCart}
              handleActive={handleActive}
              deleteProducts={deleteProducts}
            />
          </div>
        </div>
      </div>
      <h1 className="text-[60px] ml-10 pt-30 text-amber-50 font-bold">
        Elige tu combo del día
      </h1>
    </header>
  );
};

export default Header;
