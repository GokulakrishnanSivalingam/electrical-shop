import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import App from '../App'
import LocationMap from '../LocationMap'
import Events from '../components/Events'
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/loc' element={<LocationMap/>}/>
            <Route path='/events' element={<Events/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
