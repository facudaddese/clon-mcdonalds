import { useContext } from "react";
import { Context } from "../context/Context";
import Card from "../card/Card";

const FriesSides = ({ click }) => {
  const { products } = useContext(Context);

  return (
    <div className="grid grid-products py-4">
      <div className="flex items-center gap-3 ml-10 py-10 font-bold [grid-area:title]">
        <h2 className="text-[30px]">Para acompañar</h2>
        <strong
          onClick={click} //hacer funcionar este click
          className="material-symbols-outlined cursor-pointer"
        >
          arrow_forward
        </strong>
      </div>
      <div className="grid grid-principal gap-2 [grid-area:products] mx-10">
        {products
          .filter((item) => item.category.toLowerCase() === "fries & sides")
          .map((item) => (
            <Card
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              click={click}
            />
          ))}
      </div>
    </div>
  );
};

export default FriesSides;
