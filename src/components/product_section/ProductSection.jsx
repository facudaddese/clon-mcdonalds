import { Link } from "react-router-dom";
import Card from "../card/Card";

const ProductSection = ({ title, category, addProducts, products }) => {
  return (
    <section className="grid grid-products py-4">
      <div className="flex items-center gap-3 ml-10 py-10 font-bold [grid-area:title]">
        <h2 className="text-[30px]">{title}</h2>
        <Link className="flex">
          <strong
            className="material-symbols-outlined cursor-pointer transition-transform duration-300 ease-out hover:translate-x-1"
            style={{ fontSize: "35px" }}
          >
            arrow_forward
          </strong>
        </Link>
      </div>
      <div className="grid grid-principal gap-2 [grid-area:products] mx-10">
        {products
          .filter((item) => item.category.toLowerCase() === category)
          .slice(0, 8)
          .map((item) => (
            <Card key={item.id} item={item} addProducts={addProducts} />
          ))}
      </div>
    </section>
  );
};

export default ProductSection;
