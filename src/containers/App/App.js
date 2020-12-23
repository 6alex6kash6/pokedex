import React from "react";
import Header from "../../components/Header";
import PokeList from "../PokeList";
import PokeInfo from "../PokeInfo";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <PokeList />
        <PokeInfo />
      </div>
    </div>
  );
}

export default App;
