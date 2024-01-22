import { useContext, useState } from "react";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Cart from "../assets/shopping-cart.svg";
import Sun from "../assets/icons/sun.svg";
import Moon from "../assets/icons/moon.svg";
import CartDetails from "./CineRental/CartDetails";
import { MovieContext, ThemeContext } from "../contexts";

const Header = () => {
  const [cartShow, setCartShow] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  console.log(cartData);
  const handleCartHide = () => {
    setCartShow(false);
  };
  return (
    <>
      {cartShow && <CartDetails onHideCart={handleCartHide} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="/">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                <img src={Ring} width="24" height="24" alt="" />
              </button>
            </li>
            <li>
              <button
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? Sun : Moon}
                  width="24"
                  height="24"
                  alt=""
                />
              </button>
            </li>
            <li>
              <button
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                onClick={() => setCartShow(true)}
              >
                <img src={Cart} width="24" height="24" alt="" />
                {cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12cf6f] text-center w-[24px] h-[24px] overflow-hidden text-[14px] leading-6">
                    {cartData.length}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
