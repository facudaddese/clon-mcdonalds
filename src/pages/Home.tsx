import ProductSection from "../components/product_section/ProductSection";
import { useAppContext } from "../hooks/useAppContext";

const Home = () => {
  const { addProducts, products } = useAppContext();

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
