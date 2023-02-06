import React, { useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateTrip from "./CreateTrip";
import Login from "./Login";
import NavBar from "./NavBar";
import SignupPage from "./SignupPage";
import TripContainer from "./TripContainer";


function App() {
  const [user, setUser] = useState(null)
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState('')


  // Auth 
  useEffect(() => {
    fetch("/auth").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          setLoading(false)
        });
      }
    });
  }, []);

  // load trips 
  useEffect(() => {
    fetch("/trips")
      .then((res) => {
        if (res.ok) {
          res.json().then(data => {
            setTrips(data);
            setLoading(false);
          })
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
  }, []);
  console.log(trips)



// helper functions 
function handleLogin(user){
  setUser(user)
}

function handleNewTrip(newTrip) {
  setTrips([...trips, newTrip])
}


  if (loading) return <h1>Loading...</h1>
  return(
    <div> 
      <NavBar user={user} setUser={setUser} />

      <Routes>
        <Route exact path= "/trips" element={<TripContainer trips={trips} />} />
        <Route exact path="/" element={<Login onLogin={handleLogin} />} />
        <Route exact path="/signup" element={<SignupPage setUser={setUser} />} />
        <Route exact path="/create" element={<CreateTrip user={user} handleNewTrip={handleNewTrip} />} />
        
      </Routes>
    </div>
  )
}

export default App;
