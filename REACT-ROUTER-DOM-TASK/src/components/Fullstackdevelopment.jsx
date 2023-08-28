import React from "react";
import "../styles/all.css";
import fullstackdevelopment from "../fullstackdeveloper.jpg";

export default function Fullstackdevelopment() {
  const obj = [
    {
      image: { fullstackdevelopment },
      title:
        "The Top 10 Tools Every Full Stack Developer Should Master in 2023",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
    {
      image: { fullstackdevelopment },
      title:
        "The Top 10 Tools Every Full Stack Developer Should Master in 2023",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
    {
      image: { fullstackdevelopment },
      title:
        "The Top 10 Tools Every Full Stack Developer Should Master in 2023",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
    {
      image: { fullstackdevelopment },
      title:
        "The Top 10 Tools Every Full Stack Developer Should Master in 2023",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
    {
      image: { fullstackdevelopment },
      title:
        "The Top 10 Tools Every Full Stack Developer Should Master in 2023",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
    {
      image: { fullstackdevelopment },
      title:
        "The Top 10 Tools Every Full Stack Developer Should Master in 2023",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    },
  ];
  return (
    <>
      <div className="cards">
        {obj.map((o, i) => (
          <div className="card" key={i}>
            <img className="card-img-top" src={fullstackdevelopment} alt="Card image cap" />
            <div className="card-body">
              <h2 className="card-title">{o.title}</h2>
              <p className="card-text">{o.description}</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
              <div className="footer">
                <span>28-Augest-2023</span>
                <ul>
                  <li>no comments</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
