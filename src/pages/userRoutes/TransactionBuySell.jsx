/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Base from '../../components/Base'
import { Table, Col, Row } from "reactstrap"
import { getTransactionBuySell } from '../../services/user-service';

const TransactionBuySell = () => {
    const [transactionbuysell, setTrancactionBuySell] = useState();

    useEffect(() => {
        getTransactionBuySell().then((response) => {
            console.log(response);
            setTrancactionBuySell(response);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    return (
        <Base>
            <Row className="m-4">
                <Col>
                    <h2 className="mb-4">All Transaction Records</h2>
                    <Table responsive striped bordered={false} className="text-justify-center">
                        <thead>
                            <tr className='text-center'>
                                <th>Order ID</th>
                                <th>State</th>
                                <th>Order date</th>
                                <th>Quantity</th>
                                <th>Total Payment</th>
                                <th>Buyer Phone Number</th>
                                <th>Buyer Email</th>
                            </tr>
                        </thead>
                        {transactionbuysell ? (
                            <tbody>            {transactionbuysell.map((transactionbuysells) => (

                                <tr key={transactionbuysells.orderId} className='text-center'>
                                    <td>{transactionbuysells.orderId}</td>
                                    <td>{transactionbuysells.state}</td>
                                    <td>{transactionbuysells.orderedAt}</td>
                                    <td>{transactionbuysells.quantity}</td>
                                    <td>{transactionbuysells.total}</td>
                                    <td>{transactionbuysells.phone}</td>
                                    <td>{transactionbuysells.takenBy_Email}</td>
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

export default TransactionBuySell;