import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ActivityDetails from "./ActivityDetails";

function TripDetails({ user, addActivity, addMemories }) {
  const [tripDetails, setTripDetails] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [newActivity, setNewActivity] = useState(false);
  const [activityError, setActivityError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch(`/trips/${id}`)
      .then((r) => r.json())
      .then((data) => setTripDetails(data));
  }, [id]);

  console.log(tripDetails);

  function handleNewActivity(e) {
    e.preventDefault();
    fetch(`/activities`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        link: link,
        date: date,
        user_id: user.id,
        trip_id: tripDetails.trip?.id,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          addActivity(data);
          setNewActivity(false);
        });
      } else {
        r.json().then((data) => setActivityError(data.error));
      }
    });
  }

  //   Helper Functions
  function handleActivityToggle() {
    setNewActivity(!newActivity);
  }

  const activityCard = tripDetails.activities?.map((activity) => {
    // console.log(activity)
    return <ActivityDetails activityID={activity.id} addMemories={addMemories} activity={activity} tripDetails={tripDetails}/>;
  });

  // console.log(tripDetails);

  return (
    <div
      className="text-center"
      style={{
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          margin: "80px auto 0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            margin: "10px auto 0 auto",
            width: "50%",
            padding: "10px",
          }}
        >
          <Card.Title className="text-center">
            {tripDetails.trip?.destination}
          </Card.Title>
          <Card.Img
            src={tripDetails.trip?.image}
            alt={tripDetails.trip?.destination}
            className="text-center"
            // style={{height:'400px', width: '400px'}}
          />
          <Card.Text className="text-center">
            {tripDetails.trip?.date_start} - {tripDetails.trip?.date_end}
          </Card.Text>
        </Card>
      </div>
      <div>
        {newActivity ? (
          <Form
            className="text-center"
            style={{ width: "60%", margin: "20px auto 0 auto" }}
            onSubmit={handleNewActivity}
          >
            <Form.Group className="mb-3" controlId="formBasicReview">
              <Form.Label>New Activity! </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Activity Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="Enter Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <Form.Control
                type="date"
                placeholder="Enter Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <button>Submit</button>
          </Form>
        ) : null}

        {user ? (
          <Button style={{ marginTop: "10px" }} onClick={handleActivityToggle}>
            Add Activities !
          </Button>
        ) : null}

        {activityError && (
          <div>
            <h1
              style={{
                margin: "100px auto 0 auto",
                textAlign: "center",
                color: "red",
              }}
            >
              {activityError}
            </h1>
          </div>
        )}
      </div>
      <div>{activityCard}</div>
    </div>
  );
}
export default TripDetails;
