import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React, { useEffect, useState } from 'react';

import CaracterCard from "./Components/CaracterCard/CaracterCard";
import CaracterPage from "./Components/CaracretPage/CaracterPage";
import Registration from "./Components/Registration/Registration";
import { YourCaracter } from "./Components/YourCaracter/YourCaracter";

import Header from './Components/Header/Header';
import './App.css';

function App() {

  let [page, setpage] = useState(1);
  let [caracters, fetchedCaracters] = useState([]);
  let {results} = caracters;
  
  let [search, setSearch] = useState("");
  
  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json()); 
      fetchedCaracters(data);
    })(); 
  }, [api]);

  return (
    <Router>
      <Header /> 
        <Routes>
          <Route path="/" element={<CaracterCard page="/" results={results} setpage={setpage} setSearch={setSearch} currentPage={page} />}/>
          <Route path="/:id" element={<CaracterPage  results={results} />}/>
          <Route path="/registration" element={<Registration /> }/>
          <Route path="/yourCaracter" element={<YourCaracter />} /> 
        </Routes>          
      </Router>  
  );
}

export default App;
