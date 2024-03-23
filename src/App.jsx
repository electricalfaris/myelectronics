import "./App.css";
import { Electronics, Sub_Pages, CATEGORY_CODE } from "./data.js";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <main className="site-wrapper">
        <h1 className="text-center heading-page">My Electronics Notes</h1>
        <div className="container-fluid">
          <BrowserRouter>
          <Home />
          </BrowserRouter>
        </div>

      </main>
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2> No page with this address, error :404</h2>
    </div>
  );
}

export default App;
