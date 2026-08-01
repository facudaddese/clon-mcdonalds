import { useContext } from "react";
import { Context } from "../components/context/Context";
import ProductSection from "../components/product_section/ProductSection";

const Home = () => {
  const { addProducts, products } = useContext(Context);

  return (
    <main>
      <ProductSection
        title="McCombos"
        category="mccombos"
        addProducts={addProducts}
        products={products}
        show={true}
      />
      <ProductSection
        title="Para acompañar"
        category="para-acompanar"
        addProducts={addProducts}
        products={products}
        show={true}
      />
      <ProductSection
        title="Postres"
        category="Postres"
        addProducts={addProducts}
        products={products}
        show={true}
      />
    </main>
  );
};

export default Home;
