import { Link } from "react-router-dom";
import { productsIcons } from "../../assets/productsIcons";

const categories = [
  { img: productsIcons.mc_combo, name: "McCombos", url: "/mccombos" },
  { img: productsIcons.burguers, name: "Hamburguesas", url: "/burguers" },
  { img: productsIcons.happy_meal, name: "Cajita Feliz", url: "/cajita-feliz" },
  {
    img: productsIcons.chickens,
    name: "Pollo y McNuggets",
    url: "/pollo-y-mcnuggets",
  },
  {
    img: productsIcons.fries_sides,
    name: "Para acompañar",
    url: "/para-acompanar",
  },
  { img: productsIcons.mc_shake, name: "McShake", url: "/mcshakes" },
  { img: productsIcons.desserts, name: "Postres", url: "/postres" },
  { img: productsIcons.salads, name: "Ensaladas", url: "/ensaladas" },
  { img: productsIcons.drinks, name: "Bebidas", url: "/bebidas" },
];

const Navbar = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-10 py-3">
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
            <span className="text-center pt-0.5 text-[14px] max-w-25">
              {item.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
