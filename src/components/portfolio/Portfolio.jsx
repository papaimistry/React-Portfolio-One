import React from "react";
import "./portfolio.css";
import DEMO1 from "../../assets/Screenshot 2023-12-16 120800.png";
import DEMO2 from "../../assets/Screenshot 2023-12-16 123848.png";
import DEMO3 from "../../assets/Screenshot 2023-12-16 124133.png";
import DEMO4 from "../../assets/Screenshot 2023-12-16 124946.png";
import DEMO5 from "../../assets/Screenshot 2023-12-16 124828.png";
import DEMO6 from "../../assets/Screenshot 2023-12-16 125309.png";

const data = [
  {
    id: 1,
    image: DEMO1,
    title: "Alpaca Generator Making Alpaca",
    github: "https://github.com/papaimistry/Alpaca-Generator",
    demo: "https://alpaca-generator-eta.vercel.app/",
  },
  {
    id: 2,
    image: DEMO2,
    title: "Crypto Status tracker",
    github: "https://github.com/papaimistry/React-Crypto-App",
    demo: "https://crypto-app-seven-plum.vercel.app/",
  },
  {
    id: 3,
    image: DEMO3,
    title: "Making A App Using ChakraUI",
    github: "https://github.com/papaimistry/First-Chakra-UI-App",
    demo: "https://firstchakraui.vercel.app/",
  },
  {
    id: 4,
    image: DEMO4,
    title: "Facebook Login Page Clone",
    github: "https://github.com/papaimistry/React-FB-Login-Page",
    demo: "https://fb-login-page-65mejqgvx-papaimistry.vercel.app/",
  },
  {
    id: 5,
    image: DEMO5,
    title: "React ColorFull Calculator",
    github: "https://github.com/papaimistry/React-FB-Login-Page",
    demo: "https://fb-login-page-65mejqgvx-papaimistry.vercel.app/",
  },
  {
    id: 6,
    image: DEMO6,
    title: "Simple React Web App",
    github: "https://github.com/papaimistry/A-Simple-React-WebApp",
    demo: "https://reactprojectone-papaimistry.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
