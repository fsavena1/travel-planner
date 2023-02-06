import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function TripCard({id, destination, start, end, image }){
    let navigate = useNavigate();


    return(
         <Col
      style={{
        marginTop: "10px",
      }}
    >
      <Card
        key={id}
        style={{
          padding: "20px",
          border: "2px solid black",
        }}
      >
        <Card.Title className="text-center">{destination}</Card.Title>
        <Card.Img
          src={image}
          alt={destination}
          onClick={() => navigate(`/trip/${id}`)}
        />
        <Card.Text className="text-center text-truncate">
          {start} - {end}
        </Card.Text>
      </Card>
    </Col>
    )
}

export default TripCard 