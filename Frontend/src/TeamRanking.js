import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const TeamRank=()=>{

    const [bat,setBat]=useState([]);
    const [bowl,setBowl]=useState([]);
    var temp=[];

    const Enter=()=>{
 
  
      

        axios.get("/teamrank").then((res)=>{

            setBat(res.data.bat);
            setBowl(res.data.bowl);
            console.log(bat);
            console.log(bowl);
            
        })
    }
    

    return(

   <div className="main"style={{backgroundColor:"#BABABA",width:"100vw",height:"92.3vh"}}>
          <div className="btn btn-md mt-3 text-white" onClick={Enter}  style={{backgroundColor:"#14213D",borderRadius:"20px",fontSize:"1.5rem"}}>Click to view</div>
       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Team Ranking By Batting</h1>
       


       <div className="container d-flex flex-column justify-content-start align-items-start">
       <p className="id" style={{fontWeight:"normal", fontSize:"1.7rem"}}> Rank    -     Team Name    -     Strike Rate   -    Fours    -    Sixes</p>
       {bat.map((element,index)=>(

           
           <p className="id" style={{fontWeight:"normal", fontSize:"1.0rem"}}>{index+1}  -  {element.Team_Name} -----  Strike Rate : {element.StrikeRate} ,  Fours : {element.Total_Fours} ,  Sixes : {element.Total_Sixes}</p>
          

        
       
    

           

        ))}

       

       </div>

       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Team Ranking By Bowling</h1>
       
      

       <div className="container d-flex flex-column justify-content-start align-items-start">
       <p className="id" style={{fontWeight:"normal", fontSize:"1.0rem"}}> Rank    -     Team Name     -    Economy  - Wickets </p>
       {bowl.map((element,index)=>(

           
           <p className="id" style={{fontWeight:"normal", fontSize:"1.0rem"}}>{index+1}  -  {element.Team_Name} -----  Economy : {element.Economy} ,  Wickets : {element.Total_Wickets}</p>
          

        
       
    

           

        ))}

       

       </div>
   </div>


    );
}

export default TeamRank;