import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import home from './Home';
import './App.css'
import logo from './assets/acm.svg'
import {about, faculty, officers, events} from './container/index';
import { ReactComponent as YourSvg } from './';
import Typed from "typed.js"


const App = () => {
  return (
    <div>
      {/* HEADER START*/}
      <div className='logo'>
        <img src={logo}></img>
      </div>
      <div className='main-home'>
        <div className='typewriter'>
          ACM<br/> VVIT
          <div>welcomes you</div>
        </div>
        <div className='typewriter'>
          Nothing is a bug; that's an undocumented feature
          
        </div>
      </div>
      
      {/* HEADER END */}
      <Routes>
          <Route exact path='/' Component={home}/>
          <Route path="/about" Component={about } />
          <Route path="/officers" Component={officers } />
          <Route path="/events" Component={events} />
          <Route path="/faculty" Component={faculty} />
      </Routes>
    </div>
  );
};

export default App;