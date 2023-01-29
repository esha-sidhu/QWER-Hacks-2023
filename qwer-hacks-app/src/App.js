/*
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
*/

import React from 'react';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Community from "./pages/community.js";
import GetStarted from "./pages/getstarted.js";
import Recs from "./pages/recs.js";
import Settings from "./pages/settings.js"
import Resources from "./pages/resources.js"
import Navigation from "./shared/navbar.js"
import Register from './pages/register.js';

function App()
{
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path = "/community" element={<Community />} />
                <Route path = "/get-started" element={<GetStarted />} />
                <Route path = "/recs" element={<Recs />} />
                <Route path = "/settings" element={<Settings />} />
                <Route path = "/resources" element={<Resources />} />
                <Route exact path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;