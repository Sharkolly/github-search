'use client';
import React, { useState, useEffect } from 'react'
import lists from './list.json';
import Search from './Components/Search';
import Lists from './Components/Lists';

const FetchData = () => {
  // https://open.er-api.com/v6/latest/USD
  const styling = {
    textAlign: 'center',
    opacity: .9
  }
  const h3Styling = {
    textAlign: 'center',
    opacity: .8,
    color: 'red'
  }

  const [country, setCountry] = useState('Nigeria');
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [err, setErr] = useState(false);
  const url = `http://universities.hipolabs.com/search?country=${country}`
  const dataFetch = async () => {
    try {
      const fetchData = await fetch(url);
      const response = await fetchData.json();
      setFetchData(response);
      // console.log(FetchData);
    }
    catch (e) {
      setErrMsg(e.message);
      setErr(true);
    }
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dataFetch(url);
      setLoading(false);
    }, 2000);
  }, [url]);
  if (country === '') {
    setCountry('Nigeria');
  }
  return (
    <div className='body'>
      <h1 className='text-center w-full font-bold text-2xl my-5'>List of Universities in {country}</h1>
      <Search country={country} setCountry={setCountry} />
      {err ? <h3 style={h3Styling}>{errMsg} ....</h3> : loading ? <p style={styling}>Loading Data....</p> : <Lists lists={lists} fetchData={fetchData} />
      }
    </div >
  )
}

export default FetchData