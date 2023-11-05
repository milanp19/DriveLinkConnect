import React from "react";
import axios from "axios";

const page = () => {
  return (
    // <iframe
    //   referrerpolicy="no-referrer-when-downgrade"
    //   src="https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS"
    //   allowfullscreen
    // ></iframe>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d502581.53154173325!2d75.96653120853838!3d10.22781437804646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!3m2!1d10.527641599999999!2d76.2144349!4m5!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!3m2!1d9.9312328!2d76.26730409999999!5e0!3m2!1sen!2sin!4v1699092766502!5m2!1sen!2sin"
      width={1600}
      height={500}
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default page;
