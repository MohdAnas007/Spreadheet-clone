import {useState} from 'react';
import './cell.css';
const Cell=({colortoset,onClick})=>{


  const [active,setactive]=useState(false);
     const click=()=>{
     if(active==false){
    setactive(true);
     }
    else{
    setactive(false);

    }

  }
    return (
     <div className={`cell ${active?'active':''}`}

       onClick={click}


       >
        <input 

        style={{backgroundColor:colortoset}}
        onClick={onClick}
        
        type="text" />



      </div>

    )
     
}

export default Cell;