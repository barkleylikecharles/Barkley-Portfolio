import React from 'react';
import homeImage from "../../assets/background_space.jpg";

export default function Home() {
  return (
    <div>
      <section className="my-5">
          <h1 id="about">Thank you for visiting my portfolio</h1>
          <p id="about" > </p>
          <img src={homeImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    </div>
  );
}
