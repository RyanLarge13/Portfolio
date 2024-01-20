import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-white z-20 shadow-lg">
      <nav className="p-4 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[40px]" />
        </Link>
        <ul className="flex justify-center items-center text-sm">
          <li>
            <Link to="/about" className="mr-4">
              About
            </Link>
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
