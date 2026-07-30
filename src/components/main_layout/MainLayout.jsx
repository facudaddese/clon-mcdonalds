import Nav from "../nav/Nav";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ProductSection from "../product_section/ProductSection";
import { useContext } from "react";
import { Context } from "../context/Context";
import { BarLoader } from "react-spinners";

const MainLayout = () => {
  const {
    cart,
    products,
    loading,
    addProducts,
    increaseQuantity,
    decrementQuantity,
    deleteProducts,
    emptyCart,
  } = useContext(Context);

  return (
    <>
      <Header
        cart={cart}
        deleteProducts={deleteProducts}
        increaseQuantity={increaseQuantity}
        decrementQuantity={decrementQuantity}
        emptyCart={emptyCart}
      />
      <Nav />
      {loading ? (
        <div className="flex justify-center items-center h-100">
          <BarLoader color="#FFC72C" width={250} />
        </div>
      ) : (
        <main>
          <ProductSection
            title="McCombos"
            category="mccombos"
            addProducts={addProducts}
            products={products}
            loading={loading}
          />
          <ProductSection
            title="Para acompañar"
            category="fries & sides"
            addProducts={addProducts}
            products={products}
          />
          <ProductSection
            title="Postres"
            category="desserts"
            addProducts={addProducts}
            products={products}
          />
        </main>
      )}
      <Footer />
    </>
  );
};

export default MainLayout;
