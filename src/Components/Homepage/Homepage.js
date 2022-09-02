import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import { useEffect, useState } from 'react';

import CaracterCard from "../CaracterCard/CaracterCard";
import CaracterPage from "../CaracretPage/CaracterPage";
import Registration from "../Registration/Registration";




export default function Homepage () {

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
        <Routes>
          <Route path="/" element={<CaracterCard page="/" results={results} setpage={setpage} setSearch={setSearch} currentPage={page} />}/>
          <Route path="/:id" element={<CaracterPage  results={results} />}/>
          <Route path="/registration" element={<Registration /> }/>
        </Routes>          
      </Router>  
      );



}
