import React from 'react'

const Search = ({country, setCountry}) => {
  return (
      <div className='flex justify-center'>
             <form action="" className=''>
                <input type="search" className='' name="search" id="search" onChange={(e) => setCountry(e.target.value)} />
            </form>
    </div>
  )
}

export default Search;