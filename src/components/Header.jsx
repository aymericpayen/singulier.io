import logo from "../img/logo.png";

function Header() {
  return (
    <header className="h-[10vh] p-6 flex flex-col md:flex-row items-center justify-between bg-fifth-color-beige w-screen text-black border-b-4 border-black">
      <img src={logo} alt="logo" className="w-64 h-12"></img>
    </header>
  );
}

export default Header;
