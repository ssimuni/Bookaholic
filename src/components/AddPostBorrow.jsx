import React, { useState } from 'react'
import { Card, CardBody, Form, FormGroup, Col, Row, Label, Input, Button, Container, CardHeader } from 'reactstrap';
import { toast } from 'react-toastify';
import { addBorrowPost } from '../services/user-service';

const AddPostBorrow = () => {

    const [data, setData] = useState({
        b_title: '',
        b_authorname: '',
        b_edition: '',
        b_numOfPages: '',
        b_description: '',
        b_price: '',
        b_quantity: '',
        category: '',
        pickupPoint: '',
        returnTime: '',
        b_soldBy_Email: ''
    })
    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value })
    }
    const handleReset = () => {
        setData(
            {
                b_title: '',
                b_authorname: '',
                b_edition: '',
                b_numOfPages: '',
                b_description: '',
                b_price: '',
                b_quantity: '',
                category: '',
                pickupPoint: '',
                returnTime: '',
                b_soldBy_Email: ''
            }
        )
    }
    const submitForm = (event) => {
        event.preventDefault();
        addBorrowPost(data).then((response) => {
            toast.success("Post added successfully. " + response.b_title);
            setData({
                b_title: '',
                b_authorname: '',
                b_edition: '',
                b_numOfPages: '',
                b_description: '',
                b_price: '',
                b_quantity: '',
                category: '',
                pickupPoint: '',
                returnTime: '',
                b_soldBy_Email: ''
            })
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <Container className="mb-5" style={{ marginTop: '10px' }}>
            <Row className="mt-5">
                <Col sm={{ size: 6, offset: 3 }}>
                    <Card color="dark" outline className="shadow-md">
                        <CardHeader>
                            <h3 className="text-center">Add New Book to give Borrow</h3>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={submitForm}>
                                <FormGroup>
                                    <Label for="name">Enter Book Title</Label>
                                    <Input
                                        type="text"
                                        placeholder="Enter here"
                                        id="b_title"
                                        onChange={(e) => handleChange(e, 'b_title')}
                                        value={data.b_title}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Enter Author Name</Label>
                                    <Input
                                        type="text"
                                        placeholder="Enter here"
                                        id="b_authorname"
                                        onChange={(e) => handleChange(e, 'b_authorname')}
                                        value={data.b_authorname}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Enter Edition of Book</Label>
                                    <Input
                                        type="text"
                                        placeholder="Enter here e.g 6th. If this is a nonacademic book then write 'Not Required'."
                                        id="b_edition"
                                        onChange={(e) => handleChange(e, 'b_edition')}
                                        value={data.b_edition}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Enter Number of Pages of Book</Label>
                                    <Input
                                        type="number"
                                        placeholder="Enter here"
                                        id="b_numOfPages"
                                        onChange={(e) => handleChange(e, 'b_numOfPages')}
                                        value={data.b_numOfPages}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="text">Enter Quantity of Book</Label>
                                    <Input
                                        type="number"
                                        placeholder="Enter here"
                                        id="b_quantity"
                                        onChange={(e) => handleChange(e, 'b_quantity')}
                                        value={data.b_quantity}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Enter Brief Description of Book</Label>
                                    <Input
                                        type="textarea"
                                        placeholder="Enter here"
                                        id="b_description"
                                        onChange={(e) => handleChange(e, 'b_description')}
                                        value={data.b_description}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Enter Price of Book</Label>
                                    <Input
                                        type="number"
                                        placeholder="Enter here"
                                        id="b_price"
                                        onChange={(e) => handleChange(e, 'b_price')}
                                        value={data.b_price}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Select Category</Label>
                                    <Input
                                        type="select"
                                        id="category"
                                        onChange={(e) => handleChange(e, 'category')}
                                        required>
                                        <option value={"Academic"}>
                                            Academic
                                        </option>
                                        <option value={"Non Academic"}>
                                            Non Academic
                                        </option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="text">Enter PickUp Point From Where Borrower Will Receive The Book</Label>
                                    <Input
                                        type="address"
                                        placeholder="Enter pickup point"
                                        id="pickupPoint"
                                        onChange={(e) => handleChange(e, 'pickupPoint')}
                                        value={data.pickupPoint}
                                        required
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Select Duration For How Long A Borrower Can Keep The Book To Himself</Label>
                                    <Input
                                        type="select"
                                        id="returnTime"
                                        onChange={(e) => handleChange(e, 'returnTime')}
                                        required>
                                        <option value={"7 Days"}>
                                            7 days
                                        </option>
                                        <option value={"15 Days"}>
                                            15 Days
                                        </option>
                                        <option value={"30 Days"}>
                                            30 Days
                                        </option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="text">Enter Email Address of Lender</Label>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email address carefully"
                                        id="b_soldBy_Email"
                                        onChange={(e) => handleChange(e, 'b_soldBy_Email')}
                                        value={data.b_soldBy_Email}
                                        required
                                    ></Input>
                                </FormGroup>
                                <Container className="text-center">
                                    <Button color="info" outline>
                                        Submit
                                    </Button>
                                    <Button onClick={handleReset} color="secondary" outline className="m-4">
                                        Reset
                                    </Button>
                                </Container>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AddPostBorrow;