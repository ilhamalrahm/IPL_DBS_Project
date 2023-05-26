import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const Team_Info=()=>{

    const [team,setTeam]=useState();
    const [srat,setSrate]=useState();
    const [fours,setFours]=useState();
    const [sixes,setSixes]=useState();
 


    

    const Enter=()=>{

        const team_name=document.getElementById("team_name").value;
       
    
      
        console.log(team_name);

        axios.put("/teaminfo",{team_name}).then((res)=>{
            console.log(res.data.data);
            
           

                setTeam(team_name);
                setSrate(res.data.data[0].StrikeRate);
                setFours(res.data.data[0].Total_Fours);
                setSixes(res.data.data[0].Total_Sixes);
                console.log(srat);
            
      
            
            
            
        })
    }
    

    return(

   <div className="main"style={{backgroundColor:"#BABABA",width:"100vw",height:"92.3vh"}}>
       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Team Info: </h1>
        <div className="container d-flex my-5 justify-content-around flex-row position-relative">
            <div className="inner d-flex flex-column justify-content-center">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Team Name:</p>
                <input className="form-control mx-3" id="team_name" style={{width:"80%",height:"35%"}} type="text" placeholder="Team name" aria-label="default input example"></input>
            </div>
            

           

            
       </div>
       <div className="btn btn-md mt-5 text-white" onClick={Enter}  style={{backgroundColor:"#14213D",borderRadius:"20px",fontSize:"1.5rem"}}>Enter</div>

       <div className="container d-flex">

       <div className="container" id="bats" style={{visibility:"visible"}}>
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Team Name: {team} </p>
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Strike Rate: {srat} </p>
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Fours: {fours} </p>
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Sixes: {sixes} </p>
           
    

           
       </div>
       </div>
   </div>

    );
}

export default Team_Info;