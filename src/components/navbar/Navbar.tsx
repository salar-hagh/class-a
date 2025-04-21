import { Link, useLocation } from "react-router";
import styled from "./Navbar.module.css";
import { navs } from "./Navbar.const";
import Container from "../container/Container";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Test from "./Test";

function Navbar() {
  const location = useLocation();
  const { getTotalQty } = useContext(AppContext);

  console.log(1);
  console.log(1);
  console.log(1);
  console.log(1);
  console.log(1);

  return (
    <div className={styled.header}>
      <Container>
        <div className="flex justify-between bg-amber-700">
          <div>
            {navs.map((nav) => (
              <Link
                style={{ color: location.pathname === nav.to ? "red" : "#333" }}
                key={nav.to}
                to={nav.to}
              >
                {nav.title}
              </Link>
            ))}
          </div>

          <Test />

          <div className="relative">
            <Link to="/cart">Cart</Link>
            <span className="absolute top-0 right-0 text-xs flex justify-center text-white size-4 bg-red-500 rounded-full">
              {getTotalQty()}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
