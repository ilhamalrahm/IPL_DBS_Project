import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const Matches=()=>{

    const Enter=()=>{
   
        const match_no=document.getElementById("match_no").value;
        const date=document.getElementById("date").value;
        const stadium=document.getElementById("stadium").value;
        const city=document.getElementById("city").value;
        console.log(match_no,date,stadium,city);

        axios.put("/schedule",{match_no,date,stadium,city}).then((res)=>{
            console.log(res.data);
        })
    }

    return(

   <div className="main"style={{backgroundColor:"#BABABA",width:"100vw",height:"92.3vh"}}>
       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Add a Match</h1>
        <div className="container d-flex my-5 justify-content-around flex-row position-relative">
            <div className="inner d-flex flex-column justify-content-center">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Match no:</p>
                <input className="form-control mx-3" id="match_no" style={{width:"80%",height:"35%"}} type="text" placeholder="Match No" aria-label="default input example"></input>
            </div>
            
            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Date:</p>
                <input className="form-control mx-3 position-relative" id="date" style={{width:"80%",height:"35%"}} type="text" placeholder="Date in YYYY-MM-DD" aria-label="default input example"></input>
            </div>

            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Stadium</p>
                <input className="form-control mx-3 position-relative" id="stadium" style={{width:"80%",height:"35%"}} type="text" placeholder="Stadium" aria-label="default input example"></input>
            </div>

            
        </div>
        <div className="container d-flex my-5 justify-content-around flex-row position-relative">
            <div className="inner d-flex flex-column justify-content-center">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>City:</p>
                <input className="form-control mx-3" id="city" style={{width:"80%",height:"35%"}} type="text" placeholder="City" aria-label="default input example"></input>
            </div>
            
          

            
        </div>
        <div className="btn btn-md mt-5 text-white" onClick={Enter}  style={{backgroundColor:"#14213D",borderRadius:"20px",fontSize:"1.5rem"}}>Enter</div>
   </div>

    );
}

export default Matches;