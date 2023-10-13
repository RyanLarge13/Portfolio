import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <header className="p-5 fixed top-0 right-0 left-0 bg-white z-20">
      <nav className="flex justify-between items-center">
        <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />
        <ul className="flex justify-center items-center gap-x-5">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
