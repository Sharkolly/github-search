import React,{ useState } from 'react'

const useData = () => {

    const [data, setData] = useState(0)
        const add = () => {
        setData(data => data + 1);
    }
    const subtract = () => {
        setData(data => data - 1);
    }


    return { data, add, subtract } ;
}

export default useData;