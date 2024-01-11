
import React,{useState,useEffect} from 'react'
import "./global.css"
const FetchingApiUsing_ayanc_wait = () => {

    let[userdata,setuserdata]=useState([])


    useEffect(()=>{
     let fetchdata=async()=>{
        let data=await fetch("https://api.github.com/users");
        let findData=await data.json();
        setuserdata(findData)
     }

     fetchdata()
    },[])


  return (
    <div className='mainblock'>
        {userdata.map((x,y)=>{
            return(
                <div  key={y}  className='card'>
                    <h2>Name: {x.login}</h2>
                   <h2>id no: {x.id}</h2>
                    <h2>photo</h2>
                   <img src={x.avatar_url} alt="" />
                </div>
            )
        })}
        

    </div>
  )
}

export default FetchingApiUsing_ayanc_wait