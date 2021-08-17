/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN ='https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL =`${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () => {
 const [isError, setError] = useState(false);
 const [isLoading, setLoading] = useState(false);
 const [forecast, setForecast] = useState(null);
 
 const submitRequest = async (location) => {
    const {data}= await axios(`${REQUEST_URL}/search`, { params : {query : location} });
    console.log({data});

    if(!data || data.length===0)
    {
        setError('There is no such city or location');
        // alert("There is no such city or location")
        return;
    }
    const response= await axios(`${REQUEST_URL}/${data[0].woeid}`);
    console.log({response});
 }
    return {
        isError,isLoading,forecast,submitRequest
    }
} 

export default useForecast;