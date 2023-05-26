import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const Plays=()=>{

    const Enter=()=>{
        const match_no=document.getElementById("match_no").value;
        const team_name=document.getElementById("team_name").value;
  
      
        console.log(match_no,team_name);

        axios.put("/plays",{match_no,team_name}).then((res)=>{
            console.log(res.data);
        })
    }
    

    return(

   <div className="main"style={{backgroundColor:"#BABABA",width:"100vw",height:"92.3vh"}}>
       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Add a Game    </h1>
        <div className="container d-flex my-5 justify-content-around flex-row position-relative">
            <div className="inner d-flex flex-column justify-content-center">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Match no:</p>
                <input className="form-control mx-3" id="match_no" style={{width:"80%",height:"35%"}} type="text" placeholder="Match No" aria-label="default input example"></input>
            </div>
        

            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Team name:</p>
                <input className="form-control mx-3 position-relative" id="team_name" style={{width:"80%",height:"35%"}} type="text" placeholder="Team Name" aria-label="default input example"></input>
            </div>

            
       </div>
       <div className="btn btn-md mt-5 text-white" onClick={Enter}  style={{backgroundColor:"#14213D",borderRadius:"20px",fontSize:"1.5rem"}}>Enter</div>
   </div>

    );
}

export default Plays;