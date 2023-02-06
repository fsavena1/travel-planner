import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TripDetails({ user }) {
  const [tripDetails, setTripDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/trips/${id}`)
      .then((r) => r.json())
      .then((data) => setTripDetails(data));
  }, [id]);

  console.log(tripDetails)

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
        
          <Button >Add Activity</Button>
        </Card>
      </div>
    </div>
  );
}
export default TripDetails;
