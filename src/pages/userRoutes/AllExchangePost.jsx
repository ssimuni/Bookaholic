/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Base from '../../components/Base'
import { Table, Col, Row } from "reactstrap"
import { getExchangePost } from '../../services/user-service';

const AllExchangePost = () => {
    const [exchangepost, setExchangePost] = useState();

    useEffect(() => {
        getExchangePost().then((response) => {
            console.log(response);
            setExchangePost(response);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    return (
        <Base>
            <Row className="m-4">
                <Col>
                    <h2 className="mb-4">All Exchange Posts</h2>
                    <Table responsive striped bordered={false} className="text-justify-center">
                        <thead>
                            <tr className='text-center'>
                                <th>Book ID</th>
                                <th>Book title</th>
                                <th>Author name</th>
                                <th>Book Edition</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Posted At</th>
                                <th>Seller Name</th>
                                <th>Seller Email</th>
                            </tr>
                        </thead>
                        {exchangepost ? (
                            <tbody>            {exchangepost.map((exchangeposts) => (

                                <tr key={exchangeposts.sid} className='text-center'>
                                    <td>{exchangeposts.sid}</td>
                                    <td>{exchangeposts.b_title}</td>
                                    <td>{exchangeposts.b_authorname}</td>
                                    <td>{exchangeposts.b_edition}</td>
                                    <td>{exchangeposts.b_price}</td>
                                    <td>{exchangeposts.category}</td>
                                    <td>{exchangeposts.postAt}</td>
                                    <td>{exchangeposts.sold_by}</td>
                                    <td>{exchangeposts.soldBy_Email}</td>
                                </tr>
                            ))}
                            </tbody>) :
                            <>
                                <h3>No records found...</h3>
                            </>
                        }
                    </Table>
                </Col>
            </Row>
        </Base>
    )
}

export default AllExchangePost;