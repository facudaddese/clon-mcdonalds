import { Link } from "react-router-dom";
import { productsIcons } from "../../assets/productsIcons";
import "./Iconbar.css";

const categories = [
  { img: productsIcons.mc_combo, name: "McCombos", url: "/categoria/mccombos" },
  {
    img: productsIcons.burguers,
    name: "Hamburguesas",
    url: "/categoria/hamburguesas",
  },
  {
    img: productsIcons.happy_meal,
    name: "Cajita Feliz",
    url: "/categoria/cajita-feliz",
  },
  {
    img: productsIcons.chickens,
    name: "Pollo y McNuggets",
    url: "/categoria/pollo-y-mcnuggets",
  },
  {
    img: productsIcons.fries_sides,
    name: "Para acompañar",
    url: "/categoria/para-acompanar",
  },
  { img: productsIcons.mc_shake, name: "McShake", url: "/categoria/mcshakes" },
  { img: productsIcons.desserts, name: "Postres", url: "/categoria/postres" },
  { img: productsIcons.salads, name: "Ensaladas", url: "/categoria/ensaladas" },
  { img: productsIcons.drinks, name: "Bebidas", url: "/categoria/bebidas" },
];

const Iconbar = () => {
  return (
    <ul className="flex justify-center max-w-screen items-center gap-15 py-1.5 overflow-x-auto scrollbar-thumb-gray-200 ul">
      {categories.map((item) => (
        <li
          key={item.url}
          className="transition-transform duration-300 ease-out hover:-translate-y-2"
        >
          <Link to={item.url} className="flex w-25 items-center flex-col">
            <img
              src={item.img}
              alt={`${item.name} icon`}
              width={50}
              className="rounded-[50px]"
            />
            <span className="text-(length:--text-nav-item) text-center pt-0.5 max-w-25">
              {item.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Iconbar;
