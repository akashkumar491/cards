import React from 'react'
import {BrowserRouter,Link} from 'react-router-dom'

const CardDetail = (props) => {
 // console.log(props);
  return (
    <div className='card-detail'>
    {props.user.array.map((e)=>{
      if(e.id===props.user.cardId)
      return (e.body);
    })}
    <br></br>
    <button className="btn-card-detail" onClick={props.handleBackClick}>BACK</button>
    </div>
  )
}

export default CardDetail