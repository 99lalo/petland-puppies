import React from "react";
import FooterLocation from "./footerLocation";

export default function Footer() {
  const stores = [
    {
      location: "PEMBROKE PINES",
      address: "356 N University Drive Pembroke Pines, FL 33024",
      number: "954 442 3106",
      schedule: {
        days: ["Monday - Sunday"],
        hours: ["10:00 am - 9:00 pm"],
      },
      permit_number: null,
    },
    {
      location: "PLANTATION",
      address: "801 South University Drive Suite #C-106 Plantation, FL 33324",
      number: "954 442 3106",
      schedule: {
        days: ["Monday - Sunday"],
        hours: ["10:00 am - 9:00 pm"],
      },
      permit_number: null,
    },
    {
      location: "DAVIE",
      address: "11482 W State Road 84 Davie, FL 33325",
      number: "954 442 3106",
      schedule: {
        days: ["Monday - Saturday", "Sunday"],
        hours: ["10:00 am - 9:00 pm", "10:00 am - 8:00 pm"],
      },
      permit_number: null,
    },
    {
      location: "KENDALL",
      address: "8236 Mills Drive Miami, FL 33183",
      number: "954 442 3106",
      schedule: {
        days: ["Monday - Sunday"],
        hours: ["10:00 am - 9:00 pm"],
      },
      permit_number: "U17/125432",
    },
    {
      location: "LARGO",
      address: "10289 Ulmerton Rd Largo, FL 33771",
      number: "727 230 1979",
      schedule: {
        days: ["Monday - Sunday"],
        hours: ["10:00 am - 9:00 pm"],
      },
      permit_number: null,
    },
    {
      location: "NAPLES",
      address: "1000 Immokalee Rd Ste 40 Naples, FL 34110",
      number: "239 324 4711",
      schedule: {
        days: ["Monday - Sunday"],
        hours: ["10:00 am - 9:00 pm"],
      },
      permit_number: "P20-001985",
    },
  ];
  return (
    <footer>
      <div className="wrapper">
        <div className="stores">
          {stores.map((store, index) => {
            return (
              <FooterLocation
                key={index}
                location={store.location}
                address={store.address}
                number={store.number}
                schedule={store.schedule}
                permitNumber={store.permit_number}
              />
            );
          })}
        </div>
        <div className="company">
          <div className="company-title">our company</div>
          <div className="faq">faq</div>
          <div className="employment">employment opportunities</div>
        </div>
        <div className="privacy-policy">
          <span>
            © 2021 PETLAND FLORIDA <a href="#">PRIVACY POLICY</a>
          </span>
          <div className="cards">
            <img src="https://www.petlandflorida.com/wp-content/themes/petland/assets/images/Visa-2.png" />
            <img src="https://www.petlandflorida.com/wp-content/themes/petland/assets/images/Master-Card-2.png" />
            <img src="https://www.petlandflorida.com/wp-content/themes/petland/assets/images/Discover-2.png" />
            <img src="https://www.petlandflorida.com/wp-content/themes/petland/assets/images/AMEX-2.png" />
          </div>
        </div>
        <img
          src="https://www.petlandflorida.com/wp-content/themes/petland/styles/assets/images/shared/logo-black.svg"
          className="footer-logo"
        />
      </div>
    </footer>
  );
}
