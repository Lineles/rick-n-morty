import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import { useEffect, useState } from 'react';

import CaracterCard from "../CaracterCard/CaracterCard";
import Pages from "../Pages/Pages";
import Navigation from "../Navigation/Navigation";
import CaracterPage from "../CaracretPage/CaracterPage";




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
        <div>
          <Navigation setpage={setpage} setSearch={setSearch}/>  
        </div>
        <Routes>
          <Route path="/" element={<CaracterCard page="/" results={results}/>}/>
          <Route path="/:id" element={<CaracterPage  results={results}/>}/>
        </Routes>

          <Pages setpage={setpage} page={page} />
          
      </Router>  
      );



}