import Nav from "../nav/Nav";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useAppContext } from "../../hooks/useAppContext";
import { BarLoader } from "react-spinners";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const {
    cart,
    loading,
    increaseQuantity,
    decrementQuantity,
    deleteProducts,
    emptyCart,
  } = useAppContext();

  return (
    <>
      <Header
        cart={cart}
        increaseQuantity={increaseQuantity}
        decrementQuantity={decrementQuantity}
        deleteProducts={deleteProducts}
        emptyCart={emptyCart}
      />
      <Nav />
      {loading ? (
        <div className="flex justify-center items-center h-100">
          <BarLoader color="#FFC72C" width={250} />
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
};

export default MainLayout;
