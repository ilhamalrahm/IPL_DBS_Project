import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const Players=()=>{

    const Enter=()=>{
        const team_name=document.getElementById("team_name").value;
        const fname=document.getElementById("fname").value;
        const lname=document.getElementById("lname").value;
        const age=document.getElementById("age").value;
        const nationality=document.getElementById("nationality").value;
        console.log(team_name,fname,lname,age,nationality);

        axios.put("/players",{team_name,fname,lname,age,nationality}).then((res)=>{
            console.log(res.data);
        })
    }

    return(

   <div className="main"style={{backgroundColor:"#BABABA",width:"100vw",height:"92.3vh"}}>
       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Add a Player</h1>
        <div className="container d-flex my-5 justify-content-around flex-row position-relative">
            <div className="inner d-flex flex-column justify-content-center">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>First Name:</p>
                <input className="form-control mx-3" id="fname" style={{width:"80%",height:"35%"}} type="text" placeholder="First Name" aria-label="default input example"></input>
            </div>
            
            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Last Name:</p>
                <input className="form-control mx-3 position-relative" id="lname" style={{width:"80%",height:"35%"}} type="text" placeholder="Last Name" aria-label="default input example"></input>
            </div>

            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Age:</p>
                <input className="form-control mx-3 position-relative" id="age" style={{width:"80%",height:"35%"}} type="text" placeholder="Age" aria-label="default input example"></input>
            </div>

            
        </div>
        <div className="container d-flex my-5 justify-content-around flex-row position-relative">
            <div className="inner d-flex flex-column justify-content-center">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Nationality:</p>
                <input className="form-control mx-3" id="nationality" style={{width:"80%",height:"35%"}} type="text" placeholder="Nationality" aria-label="default input example"></input>
            </div>
            
            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Team Name:</p>
                <input className="form-control mx-3 position-relative" id="team_name" style={{width:"80%",height:"35%"}} type="text" placeholder="Team Name" aria-label="default input example"></input>
            </div>


            
        </div>
        <div className="btn btn-md mt-5 text-white" onClick={Enter} style={{backgroundColor:"#14213D",borderRadius:"20px",fontSize:"1.5rem"}}>Enter</div>
   </div>

    );
}

export default Players;