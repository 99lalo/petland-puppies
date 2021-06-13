import React, { useState } from "react";

export default function MobileNav() {
  const [menu, showMenu] = useState(false);
  return (
    <>
      <div
        className="mobile-menu"
        style={menu ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
      >
        <div className="wrapper">
          <span className="nav-link">available puppies</span>
          <span className="nav-link">perks</span>
          <span className="nav-link">breeds</span>
          <span className="nav-link">products</span>
          <span className="nav-link">cares</span>
          <span className="nav-link">special financing*</span>
          <span className="nav-link">about</span>
          <span className="nav-link">contact</span>
          <div className="social-media">
            <div>
              <i className="fab fa-facebook-f" />
            </div>
            <div>
              <i className="fab fa-pinterest-p" />
            </div>
            <div>
              <i className="fab fa-instagram" />
            </div>
            <div>
              <i className="fab fa-youtube" />
            </div>
            <div>
              <i className="fab fa-twitter" />
            </div>
          </div>
          <a href="#">info@petlandflorida.com</a>
          <span className="phone">Phone: 954-442-3106 </span>
        </div>
        <i className="fas fa-times" onClick={() => showMenu(false)} />
      </div>
      <div className="mobile-nav">
        <div className="call-us">
          <div>
            <i className="fas fa-phone-alt" />
          </div>
          <span>call us</span>
        </div>
        <div className="products">
          <div>
            <i className="fas fa-bone" />
          </div>
          <span>products</span>
        </div>
        <div
          className="menu"
          onClick={menu ? () => showMenu(false) : () => showMenu(true)}
        >
          <div>
            <i className="fas fa-grip-lines" />
          </div>
          <span>menu</span>
        </div>
        <div className="puppies">
          <div>
            <i className="fas fa-paw" />
          </div>
          <span>puppies</span>
        </div>
        <div className="financing">
          <div>
            <i className="fas fa-dollar-sign" />
          </div>
          <span>financing</span>
        </div>
      </div>
    </>
  );
}
