import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import "./index.css/"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import About from './About'
import Login from './Login';
import background from '../public/background3.jpg'

function App() {
  
   return (
    <Router>
      <div className='App' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
             <Route path="/create">
              <Create />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
  
}

export default App;
