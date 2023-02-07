import React, { useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateTrip from "./CreateTrip";
import Login from "./Login";
import NavBar from "./NavBar";
import SignupPage from "./SignupPage";
import TripContainer from "./TripContainer";
import TripDetails from "./TripDetails";


function App() {
  const [user, setUser] = useState(null)
  const [trips, setTrips] = useState([])
  const [activities, setActivities] = useState([])
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

  // load activities 
  useEffect(() => {
    fetch("/activities")
      .then((res) => {
        if (res.ok) {
          res.json().then(data => {
            setActivities(data);
            setLoading(false);
          })
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
  }, []);




// helper functions 
function handleLogin(user){
  setUser(user)
}

function handleNewTrip(newTrip) {
  setTrips([...trips, newTrip])
}

function addActivity(newActivity){
  setActivities([...activities, newActivity])
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
        <Route exact path="/trip/:id" element={<TripDetails user={user} addActivity={addActivity} />} />
        
      </Routes>
    </div>
  )
}

export default App;
