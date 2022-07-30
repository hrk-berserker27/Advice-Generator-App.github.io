import React, { useState } from "react";
import "./sass/App.scss";
import img from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

function App() {
  const defaultState =
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.";
  const [quote, setQuote] = useState(defaultState);
  const [id, setId] = useState(117);
  const url = "https://api.adviceslip.com/advice";
  const newAdvice = () => {
    fetch(url)
      .then((response) => response.json())
      .then((item) => {
        setId(item.slip.id);
        setQuote(item.slip.advice);
      });
  };

  return (
    <React.Fragment>
      <main>
        <header>Advice #{id}</header>
        <section>
          <q>{quote}</q>
          <img src={img} alt="" />
        </section>
        <footer onClick={newAdvice}>
          <img src={dice} alt="" />
        </footer>
      </main>
    </React.Fragment>
  );
}

export default App;
//https://api.adviceslip.com/advice
