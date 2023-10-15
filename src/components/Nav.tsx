import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <header className="p-4 fixed top-0 right-0 left-0 bg-white z-20">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />
        </Link>
        <ul className="flex justify-center items-center gap-x-5">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
