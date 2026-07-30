import mcLogo from "/img/mcdonalds.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-7">
      <div className="flex flex-col items-center justify-center">
        <img src={mcLogo} alt="Mc logo" width={90} className="py-7" />
      </div>
    </footer>
  );
};

export default Footer;
