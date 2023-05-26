const mysql=require('mysql');
const express=require('express')
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ilham#123',
    database: 'Project'
  })

  connection.connect((err)=>{
      if(!err)
      {
          console.log("connection successful");
      }
      else{
          console.log("error " +err);
      }
  })

// try{

//     connection.query("SELECT fname as FirstName, lname as LastName, SUM(runs) as Total_Runs, SUM(balls) as Total_Balls, ROUND(SUM(runs)*100/SUM(balls),2) as StrikeRate, SUM(fours) as Total_Fours, SUM(sixes) as Total_Sixes FROM Batting_Scores GROUP BY fname,lname ORDER BY StrikeRate DESC", (err, rows, fields) => {
//         if (err) console.log('Eror');
      
//         console.log('The Query value is: ', rows[1]);
        
//       })

// }
// catch(err)
// {
//     console.log(err);
// }


  //Query to insert Team values

  app.put('/teams',(req,res)=>{
      const {team_name,captain_fname,captain_lname,coach}=req.body;
      var values=[[team_name,captain_fname,captain_lname,coach]];
      var command='insert into Teams values ?'
      console.log(team_name);

    connection.query(command,[values], (err, rows, fields) => {
        if (err) throw err
      
        console.log('The Query value is: ', rows[0])
      })
    

  })

  //Query to insert players values

  app.put('/players',(req,res)=>{
    const {team_name,fname,lname,age,nationality}=req.body;
    var values=[[fname,lname,age,nationality,team_name]];
    var command='insert into Players values ?'
    console.log(team_name);

  connection.query(command,[values], (err, rows, fields) => {
      if (err) throw err
    
      console.log('The Query value is: ', rows[0])
      res.json({success:"true"});
    })
  

})

//Query to insert Match Schedule values
app.put('/schedule',(req,res)=>{
    const {match_no,date,stadium,city}=req.body;
    var values=[[match_no,date,stadium,city]];
    var command='insert into Schedule values ?'
    

  connection.query(command,[values], (err, rows, fields) => {
      if (err) throw err
    
      console.log('The Query value is: ', rows[0])
      res.json({success:"true"});
    })
  

})


//Query to add plays

app.put('/plays',(req,res)=>{
    const {match_no,team_name}=req.body;
    var values=[[match_no,team_name]];
    var command='insert into Plays values ?'
   

  connection.query(command,[values], (err, rows, fields) => {
      if (err) throw err
    
      console.log('The Query value is: ', rows[0])
      res.json({success:"true"});
    })
  

})

//Query to add Results

app.put('/results',(req,res)=>{
    const {match_no,toss_winner,winner}=req.body;
    var values=[[match_no,toss_winner,winner]];
    var command='insert into Results values ?'
   

  connection.query(command,[values], (err, rows, fields) => {
      if (err) throw err
    
      console.log('The Query value is: ', rows[0])
      res.json({success:"true"});
    })
  

})

//Query to add Bowling Scores

app.put('/bowling',(req,res)=>{
    const {match_no,fname,lname,wickets,runs,balls,maidens}=req.body;
    var values=[[match_no,fname,lname,wickets,runs,balls,maidens]];
    var command='insert into Bowling_Scores values ?'
   

  connection.query(command,[values], (err, rows, fields) => {
      if (err) throw err
    
      console.log('The Query value is: ', rows[0])
      res.json({success:"true"});
    })
  

})



//Query to add Batting Scores

app.put('/batting',(req,res)=>{
    const {match_no,fname,lname,runs,balls,fours,sixes}=req.body;
    var values=[[match_no,fname,lname,runs,balls,fours,sixes]];
    var command='insert into Batting_Scores values ?'
   

  connection.query(command,[values], (err, rows, fields) => {
      if (err) throw err
    
      console.log('The Query value is: ', rows[0])
      res.json({success:"true"});
    })
  

})


//Query to display Player Info


app.put('/playerinfo',(req,res)=>{
    const {fname,lname,role}=req.body;
    var values=[fname,lname];
    if(role=='bat')
    {
    var command="SELECT ROUND(SUM(runs)*100/SUM(balls), 2) as StrikeRate,SUM(fours) as Total_Fours, SUM(sixes) as Total_Sixes FROM Batting_Scores WHERE fname=? AND lname=? GROUP BY fname,lname ORDER BY StrikeRate DESC;"
    }
    else if(role=='bowl')
    {
        var command="SELECT ROUND(SUM(runs)*6/SUM(balls), 2) as Economy,SUM(Wickets) as Total_Wickets FROM Bowling_Scores WHERE fname=? AND lname =? GROUP BY fname,lname ORDER BY Economy;";
    }
   

  connection.query(command,values, (err, rows, fields) => {
      if (err) throw err
    
      console.log('The Query value is: ', rows)
      res.json({data:rows,success:"true"});
    });
  

})


//Query to display Team_info

app.put('/teaminfo',(req,res)=>{
    const {team_name}=req.body;
    console.log(team_name);
    var values=[team_name];
    
    
    var command="SELECT ROUND(SUM(runs)*100/SUM(balls), 2) as StrikeRate,SUM(fours) as Total_Fours, SUM(sixes) as Total_Sixes FROM Batting_Scores NATURAL JOIN Players GROUP BY Team_Name HAVING Team_Name = ?"
 
   

  connection.query(command,values, (err, rows, fields) => {
      if (err) throw err
    
      console.log('The Query value is: ', rows)
      res.json({data:rows,success:"true"});
    });
  

})

//Query to Diplay batsmen Rank

app.get('/batrank',(req,res)=>{
    const {team_name}=req.body;
    console.log(team_name);
    var values=[team_name];
    
    
    var command="SELECT fname as FirstName, lname as LastName, SUM(runs) as Total_Runs, SUM(balls) as Total_Balls, ROUND(SUM(runs)*100/SUM(balls),2) as StrikeRate, SUM(fours) as Total_Fours, SUM(sixes) as Total_Sixes FROM Batting_Scores GROUP BY fname,lname ORDER BY StrikeRate DESC";
 
   

  connection.query(command,values, (err, rows, fields) => {
      if (err) throw err
    
      console.log('The Query value is: ', rows)
      res.json({data:rows,success:"true"});
    });
  

})


//Query to Display Bowlers Rank


app.get('/bowlrank',(req,res)=>{
    const {team_name}=req.body;
    console.log(team_name);
    var values=[team_name];
    
    
    var command="SELECT fname as FirstName, lname as LastName, SUM(runs)as Total_Runs, SUM(balls)as Total_Balls, ROUND(SUM(runs)*6/SUM(balls),2) as Economy, SUM(wickets) as Total_Wickets FROM Bowling_Scores GROUP BY fname,lname ORDER BY Economy";
 
   

  connection.query(command,values, (err, rows, fields) => {
      if (err) throw err
    
      console.log('The Query value is: ', rows)
      res.json({data:rows,success:"true"});
    });
  

})


//Query to Display Team Ranks


app.get('/teamrank',async(req,res)=>{
    const {team_name}=req.body;
    console.log(team_name);
    var values=[team_name];
    var bowl=[];
    var bat=[];
    
    
    var command="SELECT Team_Name, ROUND(SUM(runs)*6/SUM(balls),2) as Economy, SUM(wickets) as Total_Wickets FROM Bowling_Scores NATURAL JOIN Players GROUP BY Team_Name ORDER BY Economy";
    var command1="SELECT Team_Name, ROUND(SUM(runs)*100/SUM(balls),2) as StrikeRate, SUM(fours) as Total_fours, SUM(sixes) as Total_Sixes FROM Batting_Scores NATURAL JOIN Players GROUP BY Team_Name ORDER BY StrikeRate DESC";
 
   

  await connection.query(command,values, (err, rows, fields) => {
      if (err) throw err
    
      console.log('The Query value is: ', rows)
      bowl=rows;
      
    });

    await connection.query(command1,values, (err, rows, fields) => {
        if (err) throw err
      
        console.log('The Query value is: ', rows)
        bat=rows;
        res.json({success:"true",bowl:bowl,bat:bat});
      });

      console.log("bowl is ",bowl);

      
  

})








 

  app.listen(5005,()=>{

    console.log("backend is running");

})