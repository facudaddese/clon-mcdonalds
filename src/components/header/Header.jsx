import "./Header.css";
import mcLogo from "/img/mcdonalds.svg";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import { useState } from "react";

const Header = ({
  cart,
  deleteProducts,
  increaseQuantity,
  decrementQuantity,
  emptyCart,
}) => {
  const [activeCart, setActiveCart] = useState(false);
  const isEmpty = () => cart.length === 0;

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
          <div className="flex mr-10">
            <span
              className={`material-symbols-outlined ${!isEmpty() && "py-2"} text-yellow-400 cursor-pointer transition-transform duration-300 ease-out hover:scale-125`}
              style={{ fontSize: "35px" }}
              onClick={handleActive}
            >
              shopping_cart
            </span>
            <strong className="self-start text-yellow-400 pl-0.5">
              {cart.length > 0 && cart.length}
            </strong>
          </div>
          <div>
            <Cart
              cart={cart}
              activeCart={activeCart}
              handleActive={handleActive}
              deleteProducts={deleteProducts}
              increaseQuantity={increaseQuantity}
              decrementQuantity={decrementQuantity}
              isEmpty={isEmpty}
              emptyCart={emptyCart}
            />
          </div>
        </div>
      </div>
      <h1 className="text-(length:--text-hero) ml-10 pt-30 text-yellow-400 font-extrabold">
        Elige tu combo del día
      </h1>
    </header>
  );
};

export default Header;
