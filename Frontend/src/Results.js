import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const Results=()=>{

    const Enter=()=>{
        const match_no=document.getElementById("match_no").value;
        const toss_winner=document.getElementById("toss_winner").value;
        const winner=document.getElementById("winner").value;
      
        console.log(match_no,toss_winner,winner);

        axios.put("/results",{match_no,toss_winner,winner}).then((res)=>{
            console.log(res.data);
        })
    }
    

    return(

   <div className="main"style={{backgroundColor:"#BABABA",width:"100vw",height:"92.3vh"}}>
       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Add a Result</h1>
        <div className="container d-flex my-5 justify-content-around flex-row position-relative">
            <div className="inner d-flex flex-column justify-content-center">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Match no:</p>
                <input className="form-control mx-3" id="match_no" style={{width:"80%",height:"35%"}} type="text" placeholder="Match No" aria-label="default input example"></input>
            </div>
            
            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Toss winner:</p>
                <input className="form-control mx-3 position-relative" id="toss_winner" style={{width:"80%",height:"35%"}} type="text" placeholder="Toss Winner" aria-label="default input example"></input>
            </div>

            <div className="inner">
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Winner:</p>
                <input className="form-control mx-3 position-relative" id="winner" style={{width:"80%",height:"35%"}} type="text" placeholder="Winner" aria-label="default input example"></input>
            </div>

            
       </div>
       <div className="btn btn-md mt-5 text-white" onClick={Enter}  style={{backgroundColor:"#14213D",borderRadius:"20px",fontSize:"1.5rem"}}>Enter</div>
   </div>

    );
}

export default Results;