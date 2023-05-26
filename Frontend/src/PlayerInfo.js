import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const Player_Info=()=>{

    const [Full,setFull]=useState();
    const [srat,setSrate]=useState();
    const [fours,setFours]=useState();
    const [sixes,setSixes]=useState();
    const [eco,setEco]=useState();
    const [wickets,setWickets]=useState();


    

    const Enter=()=>{
        const fname=document.getElementById("fname").value;
        const lname=document.getElementById("lname").value;
        const fullname=fname+" "+lname;
        const role=document.getElementById("role").value;
      
        console.log(fname,lname,role);

        axios.put("/playerinfo",{fname,lname,role}).then((res)=>{
            console.log(res.data.data);
            
            if(role=='bat')
            {
                document.getElementById('bats').style.visibility="visible";
                document.getElementById('bowls').style.visibility="hidden";

                setFull(fullname);
                setSrate(res.data.data[0].StrikeRate);
                setFours(res.data.data[0].Total_Fours);
                setSixes(res.data.data[0].Total_Sixes);
                console.log(srat);
            }
            else if(role=='bowl')
            {
                document.getElementById('bowls').style.visibility="visible";
                document.getElementById('bats').style.visibility="hidden";
                setFull(fullname);
                setEco(res.data.data[0].Economy);
                setWickets(res.data.data[0].Total_Wickets);

            }
            
            
            
        })
    }
    

    return(

   <div className="main"style={{backgroundColor:"#BABABA",width:"100vw",height:"92.3vh"}}>
       <h1 className="heading py-3" style={{fontWeight:"bolder"}}>Player Info: </h1>
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
                <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Role:</p>
                <input className="form-control mx-3 position-relative" id="role" style={{width:"80%",height:"35%"}} type="text" placeholder="Role" aria-label="default input example"></input>
            </div>

           

            
       </div>
       <div className="btn btn-md mt-5 text-white" onClick={Enter}  style={{backgroundColor:"#14213D",borderRadius:"20px",fontSize:"1.5rem"}}>Enter</div>

       <div className="container d-flex">

       <div className="container" id="bats" style={{visibility:"hidden"}}>
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Full Name: {Full} </p>
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Strike Rate: {srat} </p>
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Fours: {fours} </p>
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Sixes: {sixes} </p>
           
       </div>

       <div className="container" id="bowls" style={{visibility:"hidden"}}>
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Full Name: {Full} </p>
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Economy: {eco} </p>
       <p className="id" style={{fontWeight:"normal", fontSize:"2.0rem"}}>Wickets {wickets} </p>
       

       </div>

           
       </div>
   </div>

    );
}

export default Player_Info;