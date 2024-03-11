import "./App.css";
import CardsData from "./data";

function Card({ title, image_url, desc, ref1, ref2 }) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card">
          <img className="card-img-top" src={image_url} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">{desc}</p>
            <div className="links">
              <a href={ref1} className="btn btn-primary">
                {ref1}
              </a>
              <a href={ref2} className="btn btn-primary">
                {ref2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <nav class="static-nav">
        <h3>Quick Links</h3>
        <ul>
          <li>
            {" "}
            <a href="100_IC_Circutes.html">100 IC Circutes - Book </a>{" "}
          </li>
          <li>
            {" "}
            <a href="200_Transistor_Circuits.html">
              200 Transistor Circuits - Book{" "}
            </a>{" "}
          </li>
          <li>
            <a href="components.symbols.html">Components Symbols</a>
          </li>
        </ul>
      </nav>
      <h1>My Electronics</h1>
      <hr />

      <div className="container">
        <div class="row">
          {CardsData.map((data) => {
            return (
              <Card
                key={data.id}
                title={data.title}
                image_url={data.image_url}
                desc={data.desc}
                ref1={data.ref1}
                ref2={data.ref2}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
