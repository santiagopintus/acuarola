import Link from "next/link";
import CarritoIcon from "./CarritoIcon";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content container">
        <Link href={"/"}>
          <div className="logo-container">
            <img src="/isologo.svg" alt="Logo de acuarola" />
          </div>
        </Link>
        <CarritoIcon />
      </div>
    </header>
  );
};

export default Header;
