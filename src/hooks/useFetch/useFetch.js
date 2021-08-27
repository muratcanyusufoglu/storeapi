import { useEffect,useState } from "react";
import axios from 'axios';

function useFetch(url){
    const[data,setdata]=useState([])
    const [loading,setloading]=useState(true)

    async function getdata(){

        const request=await axios.get(url) 
        setdata(request.data)
        setloading(false)      
        
    }
    useEffect(()=>{
        getdata();
    },[]);

    return {data,loading}
}

export default useFetch;