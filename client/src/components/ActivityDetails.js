import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MemoryDetails from "./MemoryDetails";
import Form from "react-bootstrap/Form";

function ActivityDetails({ activityID, addMemories, activity, tripDetails }) {
  const [activityDetails, setActivityDetails] = useState([]);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [newMemory, setNewMemory] = useState(false);
  const [memoryError, setMemoryError] = useState("");

  useEffect(() => {
    fetch(`/activities/${activityID}`)
      .then((r) => r.json())
      .then((data) => setActivityDetails(data));
  }, [activityID]);

  function handleNewMemory(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);
    formData.append("activity_id", activityID);

    fetch("/memories", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          addMemories(data);
          setNewMemory(false);
        });
      } else {
        response.json().then((data) => setMemoryError(data.error));
      }
    });
  }

  function handleMemoryToggle() {
    setNewMemory(!newMemory);
  }

  const memoryCard = activityDetails.memories?.map((memory) => {
    return <MemoryDetails memory={memory} tripDetails={tripDetails} />;
  });

  return (
    <Card
      style={{
        margin: "10px auto 0 auto",
        width: "50%",
        padding: "10px",
      }}
      id={activity.id}
    >
      <h1>{activity.name}</h1>
      <p>{activity.date}</p>
      <a href={activity.link}> {activity.link}</a>
      <div display="flex" margin="50px ">
        <Button href={`/activities/${activity.id}/edit`}>Edit</Button>
        <Button onClick={handleMemoryToggle}>Add Memory</Button>
      </div>

      <div>{memoryCard}</div>
      {newMemory ? (
        <Form
          className="text-center"
          style={{ width: "60%", margin: "20px auto 0 auto" }}
          onSubmit={handleNewMemory}
        >
          <Form.Group className="mb-3" controlId="formBasicReview">
            <Form.Label>New Memory!</Form.Label>
            <Form.Control
              type="file"
              placeholder="Select Memory"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Form.Control
              type="text"
              placeholder="Enter Caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </Form.Group>
          <button>Submit</button>
        </Form>
      ) : null}
    </Card>
  );
}

export default ActivityDetails;