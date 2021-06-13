import React, { useEffect, useState } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const scrollY = useScrollPosition(100);
  const [prevScroll, setPrevScroll] = useState();
  const [direction, setDirection] = useState(false);
  const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
  useEffect(() => {
    setPrevScroll(scrollY);
    if (scrollY > prevScroll && direction === false) {
      setDirection(true);
    }
    if (prevScroll > scrollY && direction === true) {
      setDirection(false);
    }
  }, [scrollY]);
  return (
    <div
      id={scrollY >= 100 ? "navbar" : "navtop"}
      style={direction === false ? { top: "0" } : { top: "-120px" }}
    >
      <div>
        <img
          alt="logo"
          src={
            scrollY <= 100 && !isTablet
              ? "https://www.petlandflorida.com/wp-content/themes/petland/styles/assets/images/shared/logo.png"
              : "https://www.petlandflorida.com/wp-content/themes/petland/styles/assets/images/shared/logo_red.png"
          }
        />
        <span className="nav-link">available puppies</span>
        <span className="nav-link">perks</span>
        <span className="nav-link">breeds</span>
        <span className="nav-link">products</span>
        <span className="nav-link">cares</span>
        <span className="nav-link">special financing*</span>
        <span className="nav-link">about</span>
        <span className="nav-link">contact</span>
      </div>
    </div>
  );
}
