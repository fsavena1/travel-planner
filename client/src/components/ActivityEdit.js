import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ActivityEdit({ handleEdit, handleDelete }) {
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editLink, setEditLink] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editError, setEditError] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorCode, setErrorCode] = useState(null);

  const { id } = useParams();
  const nav = useNavigate();

  function handleError(statusCode) {
    setHasError(true);
    setErrorCode(statusCode);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    fetch(`/activities/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: editName,
        description: editDescription,
        link: editLink,
        date: editDate,
      }),
    }).then((r) => {
      if (r.status === 403) {
        handleError(r.status);
        return;
      }
      if (r.ok) {
        r.json().then((data) => {
          handleEdit(data);
          nav(`/trips`);
        });
      } else {
        r.json().then((data) => {
          setEditError(Object.entries(data.errors));
        });
      }
    });
  }

  function handleActivityDelete() {
    fetch(`/activities/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.status === 403) {
        handleError(r.status);
      } else if (r.ok) {
        handleDelete(id);
        nav("/trips");
      }
    });
  }

  return (
    <div style={{ margin: "100px", width: "80%" }}>
      <Form onSubmit={handleEditSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter new name..."
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter new description..."
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Activity Link</Form.Label>
          <Form.Control
            type="test"
            placeholder="Enter link..."
            value={editLink}
            onChange={(e) => setEditLink(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Edit Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Date..."
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginRight: "5px" }}>
          Update
        </Button>
        <Button onClick={handleActivityDelete}>Delete</Button>
      </Form>
      {editError
        ? editError.map((e) => (
            <div>
              <h1 style={{ textAlign: "center", color: "red" }}>{e[1]}</h1>
            </div>
          ))
        : null}

      {errorCode && (
        <div>
          <h1
            style={{
              margin: "100px auto 0 auto",
              textAlign: "center",
              color: "red",
            }}
          >
            {errorCode}
          </h1>
        </div>
      )}
    </div>
  );
}

export default ActivityEdit;
