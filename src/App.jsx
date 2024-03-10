import "./App.css";
import CardsData from "./data";
import { useState } from "react";


function Card({ title, image_url, desc, ref1, ref2 }) {
  return (
    <>
      <div className="card">
        <img src={image_url} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <div className="button-links">
            <a href={ref1} className="btn btn-primary">
              {ref1}
            </a>
            <a href={ref2} className="btn btn-warning">
              {ref2}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <h1>My Electronics</h1>
      <div className="container">
        <div className="grid">
          {CardsData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              image_url={card.image_url}
              desc={card.desc}
              ref1={card.ref1}
              ref2={card.ref2}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
