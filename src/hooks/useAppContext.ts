import { useContext } from "react";
import { Context } from "../components/context/Context";

export const useAppContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useAppContext debe usarse dentro de <Provider>");
  }

  return context;
};
