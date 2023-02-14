import React, { useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateTrip from "./CreateTrip";
import Login from "./Login";
import NavBar from "./NavBar";
import SignupPage from "./SignupPage";
import TripContainer from "./TripContainer";
import TripDetails from "./TripDetails";
import ActivityEdit from "./ActivityEdit";
import ProfilePage from "./ProfilePage";


function App() {
  const [user, setUser] = useState(null)
  const [trips, setTrips] = useState([])
  const [activities, setActivities] = useState([])
  const [memories, setMemories] = useState([])
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

  // load memories 
  useEffect(() => {
    fetch("/memories")
      .then((res) => {
        if (res.ok) {
          res.json().then(data => {
            setMemories(data);
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

function addMemories(newMemory){
  setMemories([...memories, newMemory])
}

function handleActivityEdit(updatedActivity) {
  const newActivityarr = activities.map((activity) => {
    if (activity.id === updatedActivity.id) {
      return updatedActivity;
    }
    return activity;;
  });
  setActivities(newActivityarr);
}


function handleUpdatedActivite(updatedActivity){
  handleActivityEdit(updatedActivity);
}

function deleteActivity(id) {
  const updatedActivity = activities.filter((activity) => activity.id !== id);
  setActivities(updatedActivity);
}


  if (loading) return <h1>Loading...</h1>
  return(
    <div> 
      <NavBar user={user} setUser={setUser} />

      <Routes>
        <Route exact path= "/trips" element={<TripContainer trips={trips}  />} />
        <Route exact path="/" element={<Login onLogin={handleLogin} />} />
        <Route exact path="/signup" element={<SignupPage setUser={setUser} />} />
        <Route exact path="/create" element={<CreateTrip user={user} handleNewTrip={handleNewTrip} />} />
        <Route exact path="/trip/:id" element={<TripDetails user={user} addActivity={addActivity} activities={activities} addMemories={addMemories}  />} />
        <Route exact path="/activities/:id/edit" element={<ActivityEdit handleEdit={handleUpdatedActivite} handleDelete={deleteActivity} />} />
        <Route exact path="user/:id" element={<ProfilePage user={user} />} />
      </Routes>
    </div>
  )
}

export default App;
