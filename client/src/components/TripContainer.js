import TripCard from "./TripCard"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function TripContainer({trips}){

  // date filter 
  

    const tripDiv = trips.map((trip) => {
        return (
            <TripCard 
            key={trip.id}
            id={trip.id}
            destinations={trip.destination}
            start={trip.date_start}
            end={trip.date_end}
            image={trip.image}
            trips={trips}
            />
        )
    })
    return(
        <div
        style={{
          marginTop: "80px",
          marginBottom: "50px",
          width: "100%",
        }}
      >
        <Container >
          <Row xs={2}>{tripDiv}</Row>
        </Container>
      </div>
    )
}

export default TripContainer