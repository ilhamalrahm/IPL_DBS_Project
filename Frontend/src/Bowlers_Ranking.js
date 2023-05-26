import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const BowlRank=()=>{

    const [data,setData]=useState([]);
    var temp=[];

    const Enter=()=>{
 
  
      

        axios.get("/bowlrank").then((res)=>{
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
       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Bowlers Ranking</h1>
       
       <div className="btn btn-md mt-3 text-white" onClick={Enter}  style={{backgroundColor:"#14213D",borderRadius:"20px",fontSize:"1.5rem"}}>Click to view</div>

       <div className="container d-flex flex-column justify-content-start align-items-start">
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}> Rank    -     Full Name    -     Runs    -    Balls    -    Economy  - Wickets </p>
       {data.map((element,index)=>(

           
           <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>{index+1}  -  {element.FirstName} {element.LastName} -----  Runs : {element.Total_Runs} ,  Balls : {element.Total_Balls} ,  Economy : {element.Economy} , Wicket : {element.Total_Wickets}</p>
          

        
       
    

           

        ))}

       

       </div>
   </div>


    );
}

export default BowlRank;