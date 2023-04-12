import logo from "../img/SINGULIERS_LOGO_noir.svg";
import { Link as LinkScroll } from "react-scroll/modules";

function Header() {
  return (
    <header className="h-[10vh] p-6 flex flex-col md:flex-row items-center justify-between bg-fifth-color-beige w-screen text-black top-0 border-b-4 border-black sticky">
      <img src={logo} alt="logo" className="w-64 h-12"></img>
      <div className="w-1/2 flex justify-around items-center">
        <LinkScroll
          to="history"
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          Histoire
        </LinkScroll>
        <LinkScroll
          to="company"
          smooth={true}
          offset={-68}
          duration={500}
          className="cursor-pointer"
        >
          Entreprise
        </LinkScroll>
        <LinkScroll
          to="talents"
          smooth={true}
          offset={-28}
          duration={500}
          className="cursor-pointer"
        >
          Talents
        </LinkScroll>
      </div>
    </header>
  );
}

export default Header;
