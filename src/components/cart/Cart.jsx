const Cart = ({ cart, activeCart, handleActive, deleteProducts }) => {
  return cart.length ? (
    <div
      className={`fixed top-20 right-0 bg-gray-50 transition-transform duration-300 ease-in-out rounded-l-[30px] max-w-100 overflow-hidden z-2000 p-1 ${
        activeCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex p-2 bg-gray-100">
        <h3 className="font-bold text-center uppercase flex-1">Mi compra</h3>
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={handleActive}
        >
          close
        </span>
      </div>
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 max-h-120">
        {activeCart &&
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-10 p-2"
            >
              <div className="flex gap-4 items-center">
                <img src={item.img} alt={item.name} width={95} />
                <div className="flex flex-col gap-4">
                  <h4>{item.name}</h4>
                  <div className="flex justify-center items-center gap-4 bg-yellow-400 w-20 rounded-[30px]">
                    <button className="cursor-pointer p-1 rounded-l-[30px] hover:font-extrabold hover:bg-yellow-300">
                      -
                    </button>
                    <strong>{item.quantity}</strong>
                    <button className="cursor-pointer p-1 rounded-r-[30px] hover:font-extrabold hover:bg-yellow-300">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-center min-w-17 items-center">
                <span
                  className="material-symbols-outlined cursor-pointer"
                  onClick={() => deleteProducts(item.id)}
                >
                  delete
                </span>
                <strong>${item.price.toLocaleString("es-AR")}</strong>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-between pt-4 px-2 bg-gray-100">
        <h4 className="uppercase font-bold pb-2">Total</h4>
        <strong>
          ${" "}
          {cart
            .reduce((acum, item) => acum + item.price * item.quantity, 0)
            .toLocaleString("es-AR")}
        </strong>
      </div>
      <button className="w-full border border-amber-500 rounded-[30px] p-1.5 bg-yellow-400 cursor-pointer hover:bg-yellow-300">
        Finalizar compra
      </button>
    </div>
  ) : (
    <div
      className={`fixed top-20 right-0 bg-gray-50 transition-transform duration-300 ease-in-out rounded-l-[30px] max-w-100 overflow-hidden z-2000 p-1 ${
        activeCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex p-2 bg-gray-100">
        <h3 className="font-bold text-center uppercase flex-1 pr-2">
          Carito vacío
        </h3>
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={handleActive}
        >
          close
        </span>
      </div>
    </div>
  );
};

export default Cart;
