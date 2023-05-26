import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Team from "./Team";
import Players from './Players';
import Matches from './Matches';
import Results from './Results';
import Bowling from './Bowling';
import Batting from './Batting';
import Plays from './Plays';
import Player_Info from './PlayerInfo';
import Team_Info from './TeamInfo';
import Batsmen_Ranking from './Batsmen_Ranking';
import Bowlers_Ranking from './Bowlers_Ranking';
import TeamRanking from './TeamRanking';
function App() {
  return (
    <div className="App">
     <section className='Main' style={{backgroundColor:"#E5E5E5",height:"100%",width:"100%"}}>
            <div className="nav justify-content-center" style={{backgroundColor:"black",height:"7%"}}>
                <h2 className='text py-2' style={{color:"#E5E5E5",fontFamily:"monospace",fontWeight:"bolder"}}>IPL Data and Statistics Application</h2>

            </div>

            <div className="sidebar justify-content-center float-start" style={{backgroundColor:"#14213D",height:"92.3vh",width:"20vw"}}>
                <ul className="list">
                    <li>
                        <a href="/" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Team</a>
                    </li>

                    <li>
                        <a href="/players" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Players</a>
                    </li>

                    <li>
                        <a href="/matches" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Matches</a>
                    </li>
                    <li>
                        <a href="/plays" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Plays</a>
                    </li>
                    <li>
                        <a href="/results" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Results</a>
                    </li>
                    <li>
                        <a href="/bowling" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Bowling</a>
                    </li>
                    <li>
                        <a href="/batting" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Batting</a>
                    </li>
                    <li>
                        <a href="/playerinfo" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Player info</a>
                    </li>
                    <li>
                        <a href="/teaminfo" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Team info</a>
                    </li>
                    <li>
                        <a href="/batrank" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Batsmen Ranking</a>
                    </li>
                    <li>
                        <a href="/bowlrank" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Bowlers Ranking</a>
                    </li>
                    <li>
                        <a href="/teamrank" className="list" style={{fontSize:"2.0rem",fontWeight:"bold",color:"#8683CB",textDecoration:"none"}}>Team Ranking</a>
                    </li>
                </ul>

            </div>

            <Router>
              <Routes>
                <Route path='/' element={<Team/>}></Route>
                <Route path='/players' element={<Players/>}></Route>
                <Route path='/matches' element={<Matches/>}></Route>
                <Route path='/results' element={<Results/>}></Route>
                <Route path='/bowling' element={<Bowling/>}></Route>
                <Route path='/batting' element={<Batting/>}></Route>
                <Route path='/plays' element={<Plays/>}></Route>
                <Route path='/playerinfo' element={<Player_Info/>}></Route>
                <Route path='/teaminfo' element={<Team_Info/>}></Route>
                <Route path='/batrank' element={<Batsmen_Ranking/>}></Route>
                <Route path='/bowlrank' element={<Bowlers_Ranking/>}></Route>
                <Route path='/teamrank' element={<TeamRanking/>}></Route>
              </Routes>
            </Router>
           

        </section>
      
    </div>
  );
}

export default App;
