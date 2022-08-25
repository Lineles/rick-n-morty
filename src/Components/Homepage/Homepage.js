import React from "react";
import { useEffect, useState } from 'react';
import CaracterCard from "../CaracterCard/CaracterCard";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Pages from "../Pages/Pages";

export default function Homepage () {

  let [page, setpage] = useState(1);
  let [caracters, fetchedCaracters] = useState([]);
  let {info, results} = caracters;
  let api = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json()); 
      fetchedCaracters(data);
    })(); 
  }, [api]);


    return (
        <div>
           <Header /> 
           <Navigation />
           <CaracterCard results={results} />
           <Pages setpage={setpage} page={page} />
        </div>
      );



}