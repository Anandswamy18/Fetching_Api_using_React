import React,{useState,useEffect} from 'react'
import "./global.css"

const FechingApiUsing_then_catch = () => {

    let[userdata,setuserdata]=useState([])


       useEffect(()=>{
        fetch("https://api.github.com/users")
        .then((response)=>response.json())
        .catch((err)=>alert(err))
       },[])


  return (
    <div className='mainblock'>
        {userdata.map((x,y)=>{
            return(
                <div key={y} className='card'>
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

export default FechingApiUsing_then_catch
