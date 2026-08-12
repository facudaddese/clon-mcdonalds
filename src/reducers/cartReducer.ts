import type { CartItem, Product, Id } from "../types/Product";

export type CartActions =
  | {
      type: "add";
      payload: { item: Product };
    }
  | {
      type: "increase";
      payload: { id: Id };
    }
  | {
      type: "decrement";
      payload: { item: CartItem };
    }
  | {
      type: "delete";
      payload: { item: CartItem };
    }
  | { type: "empty" };

export const cartReducer = (
  state: CartItem[],
  action: CartActions,
): CartItem[] => {
  switch (action.type) {
    case "add":
      if (state.find((el) => el.id === action.payload.item.id)) {
        return state.map((p) =>
          p.id === action.payload.item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p,
        );
      }
      return [...state, { ...action.payload.item, quantity: 1 }];
    case "increase":
      return state.map((el) =>
        el.id === action.payload.id.id
          ? { ...el, quantity: el.quantity + 1 }
          : el,
      );
    case "decrement":
      return state
        .map((el) =>
          el.id === action.payload.item.id
            ? { ...el, quantity: el.quantity - 1 }
            : el,
        )
        .filter((el) => el.quantity > 0);
    case "delete":
      return state.filter((e) => e.id !== action.payload.item.id);
    case "empty":
      return [];
    default:
      return state;
  }
};
