import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function CreateTrip({ user , handleNewTrip}){
    const [destination, setDestination] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [image, setImage] = useState('')
    const [tripError, setTripError] = useState('')

    const nav = useNavigate()


    function handleTrip(e) {
        e.preventDefault();
        fetch('/trips', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                destination: destination,
                date_start: startDate,
                date_end: endDate,
                image: image,
                user_id: user.id
            })
        }).then(r => {
            if (r.ok) {
                r.json().then(data => {
                    nav('/trips')
                    handleNewTrip(data)
                })
            } else {
                r.json().then(data => {
                    setTripError(Object.entries((data.errors)))
                })
            }
        })
    }


    return (
        <div style={{ margin: '80px auto', width: '50%' }}>
            <h1> Enter Trip Details</h1>
            <Form onSubmit={handleTrip} >
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Destination..."
                        value={destination}
                        onChange={e => setDestination(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Enter Start Date..."
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Enter End Date..."
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Image..."
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                </Form.Group>

                
                <Button
                    variant="primary"
                    type="submit"
                >
                    Create New Trip
                </Button>
            </Form>
            {tripError ? (tripError.map(e => <div><h1 style={{ textAlign: 'center', color: 'red' }}>{e[1]}</h1></div>)
            ) : null}
     
        </div>
    )
}

export default CreateTrip