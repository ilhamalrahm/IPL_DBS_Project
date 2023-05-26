import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const BatRank=()=>{

    const [data,setData]=useState([]);
    var temp=[];

    const Enter=()=>{
 
  
      

        axios.get("/batrank").then((res)=>{
            console.log(res.data.data[0]);
            
            for(var i=0;i<7;i++)
            {
                temp[i]=res.data.data[i];
            }
            setData(temp);
            console.log(temp);
        })
    }
    

    return(

   <div className="main"style={{backgroundColor:"#BABABA",width:"100vw",height:"92.3vh"}}>
       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Batsmen Ranking</h1>
       
       <div className="btn btn-md mt-3 text-white" onClick={Enter}  style={{backgroundColor:"#14213D",borderRadius:"20px",fontSize:"1.5rem"}}>Click to view</div>

       <div className="container d-flex flex-column justify-content-start align-items-start">
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}> Rank    -     Player Name    -     Runs  -    Balls    -    Strike Rate</p>
       {data.map((element,index)=>(

           
           <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>{index+1}  -  {element.FirstName} {element.LastName} -----  Runs : {element.Total_Runs} ,  Balls : {element.Total_Balls} ,  Strike Rate : {element.StrikeRate}</p>
          

        
       
    

           

        ))}

       

       </div>
   </div>


    );
}

export default BatRank;