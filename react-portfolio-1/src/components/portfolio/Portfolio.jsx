import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/movieee.png";
import IMG2 from "../../assets/skapp.png";
import IMG3 from "../../assets/parapapa.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Movies Streaming Hub</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mike-piotrowski/netflix_clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://gracious-almeida-358b14.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Food Recipies Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mike-piotrowski/recipies-web"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://spontaneous-tulumba-c4687a.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Ecommerce Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mike-piotrowski/estore/tree/main/estore"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://chimerical-mooncake-e38f57.netlify.app/shop.html"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
