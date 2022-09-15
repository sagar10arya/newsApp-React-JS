import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


  const App = () => {
  const pageSize =6;
  const apiKey = process.env.REACT_APP_NEWS_API

  const[progress,setProgress]=useState(0)
 
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar 
        height={3}
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route path="/" exact element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize}  country='in' category='general'/>}/>
          <Route path="/general" exact element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize}  country='in' category='general'/>}/>
          <Route path="/business" exact element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize}  country='in' category='business'/>}/>
          <Route path="/entertainment" exact element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize}  country='in' category='entertainment'/>}/>
          <Route path="/health" exact element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize}  country='in' category='health'/>}/>
          <Route path="/science" exact element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize}  country='in' category='science'/>}/>
          <Route path="/sports" exact element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize}  country='in' category='sports'/>}/>


        </Routes>

        </Router>
      </div>
    )
  }
export default App;