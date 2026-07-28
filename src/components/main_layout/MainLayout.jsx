import Nav from "../nav/Nav";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ProductSection from "../product_section/ProductSection";
import { useContext } from "react";
import { Context } from "../context/Context";

const MainLayout = () => {
  const { cart, products, addProducts, deleteProducts } = useContext(Context);

  return (
    <>
      <Header
        cart={cart}
        deleteProducts={deleteProducts}
      />
      <Nav />
      <ProductSection
        title="McCombos"
        category="mccombos"
        addProducts={addProducts}
        products={products}
      />
      <ProductSection
        title="Para acompañar"
        category="fries & sides"
        addProducts={addProducts}
        products={products}
      />
      <Footer />
    </>
  );
};

export default MainLayout;
