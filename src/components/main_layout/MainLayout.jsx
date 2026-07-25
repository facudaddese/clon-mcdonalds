import Nav from "../nav/Nav";
import Header from "../header/Header";
import McCombos from "../mc_combos/McCombos";
import FriesSides from "../fries_sides/FriesSides";
// import Footer from "../footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <McCombos />
      <FriesSides />
    </>
  );
};

export default MainLayout;
