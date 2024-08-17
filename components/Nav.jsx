"use client";
import Image from "next/image";
import styles from "../styles/Nav.module.css";
import ShoppingCart from "./Cart";
import { useCart } from "@/context/cartContext";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname to get the current path

const Nav = () => {
  const { toggleCartVisibility } = useCart();
  const navigation = useRouter(); // Use the useRouter hook
  const pathname = usePathname(); // Get the current path

  const handleHome = () => {
    if (pathname !== "/") {
      navigation.push("/"); // Navigate to the home page if not already there
    }
  };

  const handleToggleCart = () => {
    if (pathname !== "/checkout") {
      toggleCartVisibility(); // Toggle cart visibility if not on the checkout page
    }
  };

  return (
    <>
      <ShoppingCart />
      <div className={styles.nav_bar}>
        <img
          onClick={handleHome}
          className={styles.nav_logo}
          src="/imgs/logo/ol.png"
          alt=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.shopping_icon}
          onClick={handleToggleCart} // Use the new handleToggleCart function
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
    </>
  );
};

export default Nav;
