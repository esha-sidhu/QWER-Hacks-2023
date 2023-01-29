import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navStyle">
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
      
    
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li><Link to="/">App Name</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/recs">Recommendations</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/">Log Out</Link></li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navigation;
