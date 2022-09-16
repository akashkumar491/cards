import React, { useEffect, useState } from 'react'
import './Card.css'
import CardDetail from './CardDetail';
const Card = () => {

  const [user,setUser] = useState({array:[],isShown:false,cardID:""});

  const getAPIData = async ()=>{
    try{
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      setUser({...user,array:(await data.json())});
    }
    catch(error) {
      alert(error);
    }
      
      
  }
 // console.log(user);
  useEffect(()=>{
    getAPIData();
  },[]);

  const handleBackClick = ()=>{
    setUser({...user,isShown:false})
  }
 

  return (
    <>
    { 
      (!user.isShown)?
    <section className='card-section'>
      {user.array.map((item)=>{
        return (
        <div key={item.id} className='card'>
        <h1>TITLE: {item.title}</h1>
        <button onClick={()=>setUser({...user,isShown:true,cardId:item.id})}>Get Detail</button>
        
      </div>
      );

      })}
    </section>:
    <CardDetail user={user} handleBackClick={handleBackClick}/>
  
  }
  </>
  )
}

export default Card