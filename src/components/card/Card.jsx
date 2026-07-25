const Card = ({ img, name, price, click }) => {
  return (
    <div data-aos="fade-right" className="flex justify-center">
      <div className="shadow-[0px_7px_10px_1px_rgba(0,0,0,.2)] h-95 w-50 flex flex-col rounded-[30px] bg-gray-50">
        <div className="self-center w-full  rounded-t-[30px] p-1 bg-white">
          <img src={img} alt={name} className="w-full px-1" />
        </div>
        <div className="flex flex-col justify-center h-full mx-5 gap-2 font-bold">
          <h3>{name}</h3>
          <h4>$ {price}</h4>
        </div>
        <div className="flex justify-center items-end p-3 ">
          <button
            onClick={click} //hacer funcionar este click
            className="border border-emerald-800 rounded-[50px] p-1.5 bg-emerald-400 cursor-pointer hover:bg-emerald-500 "
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
