import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const Bowling=()=>{

    const Enter=()=>{
        const match_no=document.getElementById("match_no").value;
        const fname=document.getElementById("fname").value;
        const lname=document.getElementById("lname").value;
        const wickets=document.getElementById("wickets").value;
        const balls=document.getElementById("balls").value;
        const runs=document.getElementById("runs").value;
        const maidens=document.getElementById("maidens").value;
        console.log(match_no,fname,lname,wickets,balls,runs,maidens);

        axios.put("/bowling",{match_no,fname,lname,wickets,balls,runs,maidens}).then((res)=>{
            console.log(res.data);
        })
    }

    return(

   <div className="main"style={{backgroundColor:"#BABABA",width:"100vw",height:"92.3vh"}}>
       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Add Bowling Stats</h1>
        <div className="container d-flex my-5 justify-content-around flex-row position-relative">
            <div className="inner d-flex flex-column justify-content-center">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Match No:</p>
                <input className="form-control mx-3" id="match_no" style={{width:"80%",height:"35%"}} type="text" placeholder="Match No" aria-label="default input example"></input>
            </div>
            
            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>First Name:</p>
                <input className="form-control mx-3 position-relative" id="fname" style={{width:"80%",height:"35%"}} type="text" placeholder="First Name" aria-label="default input example"></input>
            </div>

            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Last Name:</p>
                <input className="form-control mx-3 position-relative" id="lname" style={{width:"80%",height:"35%"}} type="text" placeholder="Last Name" aria-label="default input example"></input>
            </div>

            
        </div>
        <div className="container d-flex my-5 justify-content-around flex-row position-relative">
            <div className="inner d-flex flex-column justify-content-center">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Wickets:</p>
                <input className="form-control mx-3" id="wickets" style={{width:"80%",height:"35%"}} type="text" placeholder="Wickets" aria-label="default input example"></input>
            </div>
            
            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Balls:</p>
                <input className="form-control mx-3 position-relative" id="balls" style={{width:"80%",height:"35%"}} type="text" placeholder="Balls" aria-label="default input example"></input>
            </div>


            
        </div>
        <div className="container d-flex my-5 justify-content-around flex-row position-relative">
            <div className="inner d-flex flex-column justify-content-center">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Runs:</p>
                <input className="form-control mx-3" id="runs" style={{width:"80%",height:"35%"}} type="text" placeholder="Runs" aria-label="default input example"></input>
            </div>
            
            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Maidens:</p>
                <input className="form-control mx-3 position-relative" id="maidens" style={{width:"80%",height:"35%"}} type="text" placeholder="Maidens" aria-label="default input example"></input>
            </div>


            
        </div>
        <div className="btn btn-md mt-5 text-white" onClick={Enter} style={{backgroundColor:"#14213D",borderRadius:"20px",fontSize:"1.5rem"}}>Enter</div>
   </div>

    );
}

export default Bowling;