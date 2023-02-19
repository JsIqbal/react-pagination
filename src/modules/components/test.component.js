import axios from "axios";
import React, { useState, useEffect } from "react";
import Posts from "./post.component";
import Pagination from "./pagination.component";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Test = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [count, setCount] = useState(0);
    const [formData, setFormData] = useState({
        startTime: "null",
        endTime: "null",
        masking: "null",
        campaign_name: "null",
        campaignType: "null",
        text: "null",
        campaignCreator: "null",
        campaignStatus: "null",
        campaignCategory: "null",
    });

    // const url = `https://app.cesomni.com/sms/test/?campaign_name=${formData.campaign_name}&masking=${formData.masking}&reciever=${formData.reciever}&delivery_status=${formData.delivery_status}&contenType=${formData.contenType}&startTime=${formData.startTime}&endTime=${formData.endTime}&text=${formData.text}`;
    const url = `https://app.cesomni.com/sms/campaign-report/?startTime=${formData.startTime}&endTime=${formData.endTime}&masking=${formData.masking}&campaign_name=${formData.campaign_name}&campaignCreator=${formData.campaignCreator}&campaignStatus=${formData.campaignStatus}&campaignType=${formData.campaignType}&campaignCategory=${formData.campaignCategory}`;

    const getData = async () => {
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Token f8a96d686224ebef05ed84a4cabe2979b7ec0c16`,
                    "Content-Type": "application/json",
                },
            });
            setPosts(response.data.results || []);
            setCount(response.data.count || 0);
            console.log(response);
        } catch (error) {
            setPosts([]);
            setCount(0);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getData();
    };
    return (
        <div className="container">
            <Form className="mt-4 mb-4" onSubmit={handleSubmit}>
                <Form.Group controlId="campaign_name">
                    <Form.Label>campaign_name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your campaign_name"
                        name="campaign_name"
                        value={formData.campaign_name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="masking">
                    <Form.Label>masking</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your masking"
                        name="masking"
                        value={formData.masking}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="startTime">
                    <Form.Label>startTime</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Enter your startTime"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="endTime">
                    <Form.Label>endTime</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Enter endTime"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="reciever">
                    <Form.Label>campaign Type</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="campaignType"
                        name="campaignType"
                        value={formData.campaignType}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="delivery_status">
                    <Form.Label>delivery_status</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter delivery_status"
                        name="delivery_status"
                        value={formData.delivery_status}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="contenType">
                    <Form.Label>contenType</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter contenType"
                        name="contenType"
                        value={formData.contenType}
                        onChange={handleChange}
                    />
                </Form.Group>

                <div className="mt-4 mb-4 d-flex justify-content-between">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button
                        variant="primary"
                        href={`https://app.cesomni.com/sms/testDownload/?Token=f8a96d686224ebef05ed84a4cabe2979b7ec0c16&campaign_name=${formData.campaign_name}&masking=${formData.masking}`}
                    >
                        Download
                    </Button>
                </div>
            </Form>

            <Posts posts={posts} loading={loading} />
            <Pagination
                formData={formData}
                postsPerPage={postsPerPage}
                totalPosts={count}
                paginate={paginate}
                currentPage={currentPage}
                setPosts={setPosts}
            />
        </div>
    );
};

export default Test;
