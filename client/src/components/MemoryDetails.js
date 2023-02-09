import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function MemoryDetails({memory}){

    return(
        <Accordion>
        <Accordion.Header>Memories</Accordion.Header>
        <Accordion.Body>
        <Card
            style={{
              margin: "10px auto 0 auto",
              width: "70%",
              padding: "10px",
            }}
           
          >
            <img src={memory.image} alt={memory.caption}/>
            <p>{memory.caption}</p>
            </Card>
        </Accordion.Body>
      </Accordion>

      
    )
}

export default MemoryDetails