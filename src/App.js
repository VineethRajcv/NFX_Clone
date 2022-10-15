import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {orginals,action,romance,horror,doc,comedy} from './Url'


function App(){
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost  url= {orginals} title="netflix Orginals"/>
      <RowPost  url= {action} title="Action" isSmall/>
      <RowPost  url= {doc} title="Documentation" isSmall/>
      <RowPost  url= {romance} title="Romance" isSmall/>
      <RowPost  url= {horror} title="Horror" isSmall/>
      <RowPost  url= {comedy} title="Comedy" isSmall/>
    </div>
  );
}

export default App;
