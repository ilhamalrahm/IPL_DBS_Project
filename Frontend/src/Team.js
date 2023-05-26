import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const Team=()=>{

    const Enter=()=>{
        const team_name=document.getElementById("team_name").value;
        const captain_fname=document.getElementById("captain_fname").value;
        const captain_lname=document.getElementById("captain_lname").value;
        const coach=document.getElementById("coach").value;
        console.log(team_name,captain_fname,captain_lname,coach);

        axios.put("/teams",{team_name,captain_fname,captain_lname,coach}).then((res)=>{
            console.log(res.data);
        })
    }

    return(

   <div className="main"style={{backgroundColor:"#BABABA",width:"100vw",height:"92.3vh"}}>
       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Add a Team</h1>
        <div className="container d-flex my-5 justify-content-around flex-row position-relative">
            <div className="inner d-flex flex-column justify-content-center">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Team Name:</p>
                <input className="form-control mx-3" id="team_name" style={{width:"80%",height:"35%"}} type="text" placeholder="Team name" aria-label="default input example"></input>
            </div>
            
            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Captain First name:</p>
                <input className="form-control mx-3 position-relative" id="captain_fname" style={{width:"80%",height:"35%"}} type="text" placeholder="Captain First Name" aria-label="default input example"></input>
            </div>

            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Captain Second name:</p>
                <input className="form-control mx-3 position-relative" id="captain_lname" style={{width:"80%",height:"35%"}} type="text" placeholder="Captain Last Name" aria-label="default input example"></input>
            </div>

            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Coach:</p>
                <input className="form-control mx-3 position-relative" id="coach" style={{width:"80%",height:"35%"}} type="text" placeholder="Coach" aria-label="default input example"></input>
            </div>

            
       </div>
       <div className="btn btn-md mt-5 text-white" onClick={Enter}  style={{backgroundColor:"#14213D",borderRadius:"20px",fontSize:"1.5rem"}}>Enter</div>
   </div>

    );
}

export default Team;