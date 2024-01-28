import Base from '../components/Base';
import { Card, CardBody, CardText, CardTitle, Row, Container, Col } from 'reactstrap'
function Dashboard() {
    return (
        <Base>
            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '100px'
            }}>

                <Row>
                    <Col sm className="py-2">
                        <Card
                            className="my-2"
                            color="primary"
                            inverse
                            style={{
                                width: '20rem',
                                height: '15rem'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h4" style={{ marginBottom: '30px' }}>
                                    Total Users
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm className="py-2">
                        <Card
                            className="my-2"
                            color="primary"
                            inverse
                            style={{
                                width: '20rem',
                                height: '15rem'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h4" style={{ marginBottom: '30px' }}>
                                    Total Users
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container style={{
                display: 'flex',
                justifyContent: 'center'
            }}>

                <Row>
                    <Col sm className="py-2">
                        <Card
                            className="my-2"
                            color="primary"
                            inverse
                            style={{
                                width: '20rem',
                                height: '15rem'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h4" style={{ marginBottom: '30px' }}>
                                    Total Users
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm className="py-2">
                        <Card
                            className="my-2"
                            color="primary"
                            inverse
                            style={{
                                width: '20rem',
                                height: '15rem'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h4" style={{ marginBottom: '30px' }}>
                                    Total Users
                                </CardTitle>
                                <CardText>
                                    With supporting text below as a natural lead-in to additional content.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


            </Container>
        </Base>
    )
};
export default Dashboard;