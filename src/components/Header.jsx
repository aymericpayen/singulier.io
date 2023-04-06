import logo from "../img/SINGULIERS_LOGO_noir.svg";
import { Link as LinkScroll } from "react-scroll/modules";

function Header() {
  return (
    <header className="h-[10vh] p-6 flex flex-col md:flex-row items-center justify-between bg-fifth-color-beige w-screen text-black sticky top-0 ">
      <img src={logo} alt="logo" className="w-64 h-12"></img>
      <div className="w-1/2 flex justify-around items-center">
        <LinkScroll to="history" smooth={true} offset={-200} duration={500}>
          Histoire
        </LinkScroll>
        <LinkScroll to="company" smooth={true} offset={200} duration={500}>
          Entreprise
        </LinkScroll>
      </div>
    </header>
  );
}

export default Header;
