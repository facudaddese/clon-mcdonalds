import { Product } from "../../types/Product";

interface CardProps {
  item: Product;
  addProducts: (item: Product) => void;
}

const Card = ({ item, addProducts }: CardProps) => {
  const { img, name, price } = item;

  return (
    <div data-aos="fade-right" className="flex justify-center">
      <div className="shadow-[0px_7px_10px_1px_rgba(0,0,0,.2)] h-95 w-52 flex flex-col rounded-[15px] bg-gray-50">
        <div className="self-center w-full rounded-t-[30px] p-1 bg-white">
          <img src={img} alt={name} className="w-full px-1" />
        </div>
        <div className="flex flex-col justify-center h-full mx-5 gap-2 font-bold">
          <h3 className="text-(length:--text-product-name) font-medium">
            {name}
          </h3>
          <strong className="text-(length:--text-price)">
            $ {price.toLocaleString("es-AR")}
          </strong>
        </div>
        <div className="flex justify-center items-end p-3 ">
          <button
            onClick={() => addProducts(item)}
            className="text-(length:--text-button) font-semibold border border-amber-500 rounded-[15px] p-1.5 bg-yellow-400 cursor-pointer hover:bg-yellow-300"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
