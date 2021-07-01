import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Beers = () => {

let [beer, setBeer] = useState([])

useEffect(async function() {

    let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    setBeer(res.data)
    console.log(res)
}, []) 

const ShowBeer = () => beer.map(eachBeer => <li>{eachBeer.name}</li>)




return (

        <div>
        <ShowBeer />
        </div>
    );
};

export default Beers;