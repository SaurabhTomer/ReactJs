import { useEffect , useState } from "react";

function useCurrencyInfo(currency){

    const[data , setdata] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/c41865051bf074746bc6eeaa/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]) )
        console.log(data);
        
    } , [currency])
    console.log(data);
    
    return data;
}

export default useCurrencyInfo;