import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TripDetails({ user, addActivity}) {
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
        trip_id: tripDetails.id,
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
    return (
      <Card
        style={{
          margin: "10px auto 0 auto",
          width: "70%",
          padding: "10px",
        }}
        id={activity.id}
      >
        <h1>{activity.name}</h1>
        <p>{activity.date}</p>
        <a href={activity.link}> {activity.link}</a>
        <Button href={`/activities/${activity.id}/edit`}>Edit</Button>
      </Card>
    );
    
  });


  // accoridan inside card to expand and show memory
  // add edit button

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
            padding: "20px",
          }}
        >
          <Card.Title className="text-center">
            {tripDetails.destination}
          </Card.Title>
          <Card.Img
            src={tripDetails.image}
            alt={tripDetails.destinaiton}
            className="text-center"
          />
          <Card.Text className="text-center">
            {tripDetails.date_start} - {tripDetails.date_end}
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
