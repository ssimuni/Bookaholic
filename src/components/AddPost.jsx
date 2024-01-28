import React, { useState } from 'react'
import { Card, CardBody, Form, FormGroup, Col, Row, Label, Input, Button, Container, CardHeader } from 'reactstrap';
// import { toast } from 'react-toastify';
// import { addSellPost } from '../services/user-service';
import axios from 'axios';

const AddPost = () => {

    const [b_title, setb_Title] = useState("");
    const [b_authorname, setb_authornamee] = useState("");
    const [b_edition, setb_edition] = useState("");
    const [b_numOfPages, setb_numOfPages] = useState("");
    const [b_description, setb_description] = useState("");
    const [b_price, setb_price] = useState("");
    const [b_quantity, setb_quantity] = useState("");
    const [category, setCatagory] = useState("");
    const [soldBy_Email, setsoldBy_Email] = useState("");
    const [image, setImage] = useState("");

    const setTitlef = (e) => {
        setb_Title(e.target.value)
    }
    const setNamef = (e) => {
        setb_authornamee(e.target.value)
    }
    const setEditionf = (e) => {
        setb_edition(e.target.value)
    }
    const setPagesf = (e) => {
        setb_numOfPages(e.target.value)
    }
    const setDesf = (e) => {
        setb_description(e.target.value)
    }
    const setPricef = (e) => {
        setb_price(e.target.value)
    }
    const setQuantityf = (e) => {
        setb_quantity(e.target.value)
    }
    const setCatagoryf = (e) => {
        setCatagory(e.target.value)
    }
    const setMailf = (e) => {
        setsoldBy_Email(e.target.value)
    }
    const setImagef = (e) => {
        setImage(e.target.files[0]);
    }

    const submitForm = async (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("b_title", b_title);
        formData.append("b_authorname", b_authorname);
        formData.append("b_edition", b_edition);
        formData.append("b_numOfPages", b_numOfPages);
        formData.append("b_description", b_description);
        formData.append("b_price", b_price);
        formData.append("b_quantity", b_quantity);
        formData.append("category", category);
        formData.append("soldBy_Email", soldBy_Email);
        formData.append("image", image);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        const res = axios.post("/addsell", formData, config);
        console.log(res)
    }





    // const [data, setData] = useState({
    //     b_title: '',
    //     b_authorname: '',
    //     b_edition: '',
    //     b_numOfPages: '',
    //     b_description: '',
    //     b_price: '',
    //     b_quantity: '',
    //     category: '',
    //     b_soldBy_Email: '',
    //     image: ''
    // })

    // const handleChange = (event, property) => {
    //     setData({ ...data, [property]: event.target.value })
    // }

    // const [image, setImage] = useState({
    //     image: ''
    // });

    // const onImageChange = (event) => {
    //     setImage(event.target.files[0])
    // }

    // const handleReset = () => {
    //     setData(
    //         {
    //             b_title: '',
    //             b_authorname: '',
    //             b_edition: '',
    //             b_numOfPages: '',
    //             b_description: '',
    //             b_price: '',
    //             image: '',
    //             b_quantity: '',
    //             category: '',
    //             b_soldBy_Email: '',
    //         }
    //     )
    // }
    // const submitForm = (event) => {
    //     event.preventDefault();
    //     console.log(data.category);

    //     addSellPost(data).then((response) => {
    //         toast.success("Post added successfully. " + response.b_title);
    //         setData({
    //             b_title: '',
    //             b_authorname: '',
    //             b_edition: '',
    //             b_numOfPages: '',
    //             b_description: '',
    //             b_price: '',
    //             b_quantity: '',
    //             category: '',
    //             b_soldBy_Email: '',
    //         })

    // }).catch ((error) => {
    //     console.log(error);
    // })


    return (
        <Container className="mb-5" style={{ marginTop: '30px' }}>
            <Row className="mt-5">
                <Col sm={{ size: 6, offset: 3 }}>
                    <Card color="dark" outline className="shadow-md">
                        <CardHeader>
                            <h3 className="text-center">Add New Book to Sell</h3>
                        </CardHeader>
                        <CardBody>
                            <Form >
                                {/* onSubmit={submitForm} */}
                                <FormGroup>
                                    <Form.Label for="name">Enter Book Title</Form.Label>
                                    <Input
                                        type="text"
                                        name='b_title'
                                        placeholder="Enter here"
                                        id="b_title"
                                        // onChange={(e) => handleChange(e, 'b_title')}
                                        // value={data.b_title}
                                        onChange={setTitlef}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Enter Author Name</Label>
                                    <Input
                                        type="text"
                                        name='b_authorname'
                                        placeholder="Enter here"
                                        id="b_authorname"
                                        // onChange={(e) => handleChange(e, 'b_authorname')}
                                        // value={data.b_authorname}
                                        onChange={setNamef}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Enter Edition of Book</Label>
                                    <Input
                                        type="text"
                                        name='b_edition'
                                        placeholder="Enter here e.g 6th. If this is a nonacademic book then write 'Not Required'."
                                        id="b_edition"
                                        // onChange={(e) => handleChange(e, 'b_edition')}
                                        // value={data.b_edition}
                                        onChange={setEditionf}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Enter Number of Pages of Book</Label>
                                    <Input
                                        type="number"
                                        name='b_numOfPages'
                                        placeholder="Enter here"
                                        id="b_numOfPages"
                                        // onChange={(e) => handleChange(e, 'b_numOfPages')}
                                        // value={data.b_numOfPages}
                                        onChange={setPagesf}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="text">Enter Quantity of Book</Label>
                                    <Input
                                        type="number"
                                        name='b_quantity'
                                        placeholder="Enter here"
                                        id="b_quantity"
                                        // onChange={(e) => handleChange(e, 'b_quantity')}
                                        // value={data.b_quantity}
                                        onChange={setQuantityf}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Enter Brief Description of Book</Label>
                                    <Input
                                        type="textarea"
                                        name='b_description'
                                        placeholder="Enter here"
                                        id="b_description"
                                        // onChange={(e) => handleChange(e, 'b_description')}
                                        // value={data.b_description}
                                        onChange={setDesf}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Enter Price of Book</Label>
                                    <Input
                                        type="number"
                                        name='b_price'
                                        placeholder="Enter here"
                                        id="b_price"
                                        // onChange={(e) => handleChange(e, 'b_price')}
                                        // value={data.b_price}
                                        onChange={setPricef}
                                        required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Select Category</Label>
                                    <Input
                                        type="select"
                                        name='catagory'
                                        id="category"
                                        // onChange={(e) => handleChange(e, 'category')}
                                        onChange={setCatagoryf}
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
                                    <Label for="name">Enter Email Address of Seller</Label>
                                    <Input
                                        type="email"
                                        name='soldBy_Email'
                                        placeholder="Enter your email address carefully"
                                        id="b_soldBy_Email"
                                        // onChange={(e) => handleChange(e, 'b_soldBy_Email')}
                                        // value={data.b_soldBy_Email}
                                        onChange={setMailf}
                                        required
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="image">Choose Image</Label>
                                    <Input
                                        type="file"
                                        id="image"
                                        name='image'
                                        // formEncType='multipart/form-data'
                                        // onChange={(e) => handleChange(e, 'image')}
                                        // value={data.image}
                                        onChange={setImagef}
                                        required
                                    ></Input>
                                </FormGroup>
                                <Container className="text-center">
                                    <Button color="info" outline onClick={submitForm}>
                                        Submit
                                    </Button>
                                    <Button color="secondary" outline className="m-4">
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

export default AddPost;
