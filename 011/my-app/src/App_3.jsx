import React, { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Product from "./components/product/Product";

function App() {
  return <NavBar />;
}

const ContentsContainer = ({ listName }) => {
  if (listName === "about") {
    return <About />;
  } else if (listName === "product") {
    return <Product />;
  } else if (listName === "contact") {
    return <Contact />;
  }
};

function NavBar() {
  const [listName, setListName] = useState("about");
  const checkId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="about"
            style={
              listName === "about" ? { color: "blue" } : { color: "black" }
            }
            onClick={checkId}
          >
            어바웃
          </li>
          <li
            id="product"
            onClick={checkId}
            style={
              listName === "product" ? { color: "blue" } : { color: "black" }
            }
          >
            프로덕트
          </li>
          <li
            id="contact"
            onClick={checkId}
            style={
              listName === "contact" ? { color: "blue" } : { color: "black" }
            }
          >
            컨택트
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
}

export default App;
