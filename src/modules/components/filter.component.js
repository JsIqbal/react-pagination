import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const MyForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        expirationDate: "",
    });

    const [masking, setMasking] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    const handleDownload = () => {
        axios
            .get(`https://app.cesomni.com/sms/test/?masking=${masking}`, {
                headers: {
                    Authorization: `Token f8a96d686224ebef05ed84a4cabe2979b7ec0c16`,
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                // handle success
                console.log(response);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    };

    return (
        <Form className="mt-4 mb-4" onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Enter your date of birth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="expirationDate">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Enter expiration date"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleChange}
                />
            </Form.Group>

            <div className="mt-4 mb-4 d-flex justify-content-between">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="primary" onClick={handleDownload}>
                    Download
                </Button>
            </div>
        </Form>
    );
};

export default MyForm;
