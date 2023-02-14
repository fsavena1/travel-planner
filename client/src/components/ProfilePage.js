import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useState } from "react";
import Map from "./Map";

function ProfilePage({ user }) {
  const [imgSrc, setImgSrc] = useState(user.avatar);
  const [defaultSrc, setDefaultSrc] = useState(
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
  );

  return (
    <div
      style={{
        margin: "100px auto 0 auto",
      }}
    >
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="upper">
            <img
              src="https://i.imgur.com/Qtrsrk5.jpg"
              className="img-fluid"
              alt="ok"
            />
          </div>
          <div className="user text-center">
            <div className="profile">
              <img
                src={imgSrc ? imgSrc : defaultSrc}
                className="rounded-circle"
                width="120"
                alt="ok"
              />
            </div>
          </div>
          <div className="mt-5 text-center">
            <h4 className="mb-0">
              {user.first_name} {user.last_name}
            </h4>
            <span className="text-muted d-block mb-2">{user.user_name}</span>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
}

export default ProfilePage;
