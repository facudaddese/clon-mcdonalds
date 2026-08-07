import { CartProps } from "../../types/Product";

const Cart = ({
  cart,
  activeCart,
  handleActive,
  deleteProducts,
  increaseQuantity,
  decrementQuantity,
  isEmpty,
  emptyCart,
}: CartProps) => {
  return (
    <div
      className={`fixed top-20 right-0 bg-gray-50 transition-transform duration-300 ease-in-out rounded-l-[20px] max-w-100 overflow-hidden z-2000 p-1 ${
        activeCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className={`flex justify-center ${!isEmpty() && "flex-col"} p-1 bg-gray-100`}
      >
        <div
          className={`flex justify-between items-center ${isEmpty() && "order-1"}`}
        >
          {!isEmpty() && (
            <h6
              className="text-[14px] underline text-blue-400 cursor-pointer hover:text-blue-600"
              onClick={emptyCart}
            >
              Limpiar
            </h6>
          )}
          <span
            className="material-symbols-outlined cursor-pointer"
            onClick={handleActive}
          >
            close
          </span>
        </div>
        <h3
          className={`self-center font-semibold uppercase ${isEmpty() && "px-1"}`}
        >
          {!isEmpty() ? "Mi pedido" : "Carrito vacío"}
        </h3>
      </div>
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 max-h-120">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center gap-10 p-2"
          >
            <div className="flex gap-4 items-center">
              <img src={item.img} alt={item.name} width={95} />
              <div className="flex flex-col gap-4">
                <h3 className="text-(length:--text-product-name)">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center gap-4 bg-yellow-400 border border-amber-500 w-22 h-7 rounded-[30px]">
                  <button
                    className="pl-2 cursor-pointer rounded-l-[30px] hover:font-extrabold hover:bg-yellow-300 text-[17px]"
                    onClick={() => decrementQuantity(item)}
                  >
                    -
                  </button>
                  <strong>{item.quantity}</strong>
                  <button
                    className="pr-2 cursor-pointer rounded-r-[30px] hover:font-extrabold hover:bg-yellow-300 text-[17px]"
                    onClick={() => increaseQuantity({ id: item.id })}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center min-w-17 items-center">
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => deleteProducts(item)}
              >
                delete
              </span>
              <strong className="text-(length:--text-price)">
                ${item.price.toLocaleString("es-AR")}
              </strong>
            </div>
          </div>
        ))}
      </div>
      {!isEmpty() && (
        <>
          <div className="flex justify-between items-center py-2 px-2 bg-gray-100">
            <h4 className="uppercase font-semibold">Total</h4>
            <strong className="text-(length:--text-total)">
              ${" "}
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString("es-AR")}
            </strong>
          </div>
          <button className="text-(length:--text-button) font-semibold w-full border border-amber-500 rounded-[15px] p-1.5 bg-yellow-400 cursor-pointer hover:bg-yellow-300">
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
