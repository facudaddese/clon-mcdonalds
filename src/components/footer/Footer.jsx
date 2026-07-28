import mcLogo from "/img/mcdonalds.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-50 p-10">
      <div>
        <img src={mcLogo} alt="Mc logo" width={100} className="ml-10 pt-10" />
      </div>
      <p></p>
    </footer>
  );
};

export default Footer;
