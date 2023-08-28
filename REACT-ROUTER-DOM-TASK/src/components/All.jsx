import React from "react";
import image from "../image.jpg";
import "../styles/all.css";

export default function All() {
  const obj = [
    {
      image:{image},
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
    {
      image:{image},
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
    {
      image:{image},
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
    {
      image:{image},
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
    {
      image:{image},
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
    {
      image:{image},
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
  ];

  return (
    <>
      <div className="cards">
        {obj.map((o, i) => (
          <div className="card"  key={i}>
            <img
              className="card-img-top"
              src={image}
              
              alt="Card image cap"
            />
            <div className="card-body">
              <h2 className="card-title">{o.title}</h2>
              <p className="card-text">{o.description}</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
              <div className="footer">
                <span>28-Augest-2023</span>
                <ul><li>no comments</li></ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
