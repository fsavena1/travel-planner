import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { TwitterShareButton, TwitterIcon } from "react-share";

function MemoryDetails({ memory, tripDetails }) {
  // const [shareButton, setShareButton] = useState(false);

  // const handleShareClick = () => {
  //   FB.ui(
  //     {
  //       method: "share",
  //       href: memory.image,
  //       mobile_iframe: true,
  //     },
  //     (response) => {
  //       if (response && !response.error_code) {
  //         setShareButton(false);
  //       } else {
  //         setShareButton(true);
  //       }
  //     }
  //   );
  // };

  console.log(tripDetails)


const destinationArr = [tripDetails.trip?.destination]
console.log(destinationArr)


  return (
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
          <img src={memory.image} alt={memory.caption} />
          <p>{memory.caption}</p>
          <div>
            <TwitterShareButton title={`${memory.caption}`} hashtags={destinationArr} url={'https://travel-app-oqck.onrender.com'} >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
        </div>
          {/* {shareButton ? (
            <p>An error occurred while sharing.</p>
          ) : (
            <button onClick={handleShareClick}>Share on Facebook</button>
          )} */}
        </Card>
      </Accordion.Body>
    </Accordion>
  );
}

export default MemoryDetails;
