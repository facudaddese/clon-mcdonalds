import { Link } from "react-router-dom";
import Card from "../card/Card";
import "./ProductSection.css";
import { Product } from "../../types/Product";

interface ProductSectionProps {
  title: string;
  category: string;
  addProducts: (item: Product) => void;
  products: Product[];
  show: boolean;
}

const ProductSection = ({
  title,
  category,
  addProducts,
  products,
  show,
}: ProductSectionProps) => {
  const filter = products.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase(),
  );

  const items = show ? filter.slice(0, 8) : filter;

  return (
    <section className="grid py-5 grid-products">
      <div className="flex items-center gap-3 ml-10 py-10 font-bold [grid-area:title]">
        <h2 className="text-(length:--text-title) font-extrabold text-center">
          {title}
        </h2>
        {show && (
          <Link to={`/categoria/${category.toLowerCase()}`} className="flex">
            <strong
              className="material-symbols-outlined cursor-pointer transition-transform duration-300 ease-out hover:translate-x-1"
              style={{ fontSize: "35px" }}
            >
              arrow_forward
            </strong>
          </Link>
        )}
      </div>
      <div className="grid gap-6 mx-10 [grid-area:products] grid-principal">
        {items.map((item) => (
          <Card key={item.id} item={item} addProducts={addProducts} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
