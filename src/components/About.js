import React from "react";
import logo from "../assets/logo"; // Make sure to import the logo image

function About({ image, about }) {
  return (
    <aside>
      <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;