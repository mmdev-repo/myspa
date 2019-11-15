import React from 'react';

import './App.css';

//Components
import {  Route } from 'react-router-dom';
import Home from './components/Home';
import CRUDUsers from './components/CRUDUsers';
import { BrowserRouter } from 'react-router-dom';



 class App extends React.Component {
 
  render() {
    return(
      <div className='container' style={{display: 'flex', justifyContent: 'center'}}>
        <div className='row mt-4'>
           <div className="home-hero-signup text-gray-dark js-signup-form">
            <BrowserRouter >
              <Route exact path='/home' component={Home}/>
              <Route exact path='/CRUDUsers' component={CRUDUsers}/>
            </BrowserRouter>
          </div>
        </div>
      </div>
      
      
    )
  }

}

export default App;
