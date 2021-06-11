import React, { useEffect, useState } from "react";
import useScrollPosition from "@react-hook/window-scroll";

export default function Navbar() {
  const scrollY = useScrollPosition(100);
  const [prevScroll, setPrevScroll] = useState();
  const [direction, setDirection] = useState(false);
  useEffect(() => {
      setPrevScroll(scrollY);
      if(scrollY > prevScroll && direction == false){
        setDirection(true)
      }
      if(prevScroll > scrollY && direction == true){
        setDirection(false)
      }
  }, [scrollY]);
  return (
    <div
      id={scrollY >= 100 ? "navbar" : "navtop"}
      style={direction == false ? { top: "0" }: { top: "-120px" }}
    >
      <img
        alt="logo"
        src={
          scrollY >= 100
            ? "https://www.petlandflorida.com/wp-content/themes/petland/styles/assets/images/shared/logo_red.png"
            : "https://www.petlandflorida.com/wp-content/themes/petland/styles/assets/images/shared/logo.png"
        }
      />
      <div>
        <span>available puppies</span>
        <span>perks</span>
        <span>breeds</span>
        <span>products</span>
        <span>cares</span>
        <span>special financing*</span>
        <span>about</span>
        <span>contact</span>
      </div>
    </div>
  );
}
