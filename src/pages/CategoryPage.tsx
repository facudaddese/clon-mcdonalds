import ProductSection from "../components/product_section/ProductSection";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound.tsx";
import { useAppContext } from "../hooks/useAppContext.ts";

const validCategories = [
  "mccombos",
  "hamburguesas",
  "cajita-feliz",
  "pollo-y-mcnuggets",
  "para-acompanar",
  "mcshakes",
  "postres",
  "ensaladas",
  "bebidas",
];

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const { addProducts, products } = useAppContext();

  const title = (category: string) => {
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
        return category;
    }
  };

  if (!category || !validCategories.includes(category)) {
    return <NotFound />;
  }

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
