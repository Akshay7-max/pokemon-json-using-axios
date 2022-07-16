import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [move, setMove] = useState(0);

  const getData = async() =>{
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${count}`);
      console.log(res);
      setName(res.data.name);
      setMove(res.data.moves.length);
  } 

  useEffect(() => {
    getData();
  }, [count])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>You have select <span style={{ color: "blueviolet" }}>{count}</span> number.</h1>
          <h1>Your selected character is <span style={{ color: "teal" }}>{name}</span> .</h1>
          <h1>Having number of moves is <span style={{ color: "deeppink" }}>{move}</span> .</h1>
          <select value={count} onChange={(event) => { setCount(event.target.value) }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default App
