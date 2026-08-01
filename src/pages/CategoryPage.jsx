import { useContext } from "react";
import { Context } from "../components/context/Context";
import ProductSection from "../components/product_section/ProductSection";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const { addProducts, products } = useContext(Context);

  const title = (categoy) => {
    switch (category) {
      case "mccombos":
        return "McCombos";
      case "hamburguesas":
        return "Hamburguesas";
      case "cajita-feliz":
        return "Cajita Feliz";
      case "pollo-y-mcnuggets":
        return "Pollo y McNuggets";
      case "para-acompanar":
        return "Para Acompañar";
      case "mcshakes":
        return "McShakes";
      case "postres":
        return "Postres";
      case "ensaladas":
        return "Ensaladas";
      case "bebidas":
        return "Bebidas";
      default:
        return categoy;
    }
  };

  return (
    <div>
      <ProductSection
        title={title(category)}
        category={category}
        addProducts={addProducts}
        products={products}
        show={false}
      />
    </div>
  );
};

export default CategoryPage;
