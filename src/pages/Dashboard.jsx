import Base from '../components/Base';
import { Card, CardBody, CardText, CardTitle, Row, Container, Col } from 'reactstrap'
function Dashboard() {
    return (
        <Base className='backgroundForAll'>
            <div style={{
                height: '100vh',
                marginTop: '-30px',
                background: '#F5F5F5',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <Container style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '100px',
                }}>

                    <Row>
                        <Col sm className="py-2">
                            <Card
                                className="my-2"

                                style={{
                                    width: '20rem',
                                    height: '15rem',
                                    background: 'linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)', // Transparent gradient
                                    backdropFilter: 'blur(5px) brightness(1.1) hue-rotate(5deg) saturate(0.9)', // Adjusted blur and saturation

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
                                style={{
                                    width: '20rem',
                                    height: '15rem',
                                    background: 'linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)', // Transparent gradient
                                    backdropFilter: 'blur(5px) brightness(1.1) hue-rotate(5deg) saturate(0.9)', // Adjusted blur and saturation

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
                                style={{
                                    width: '20rem',
                                    height: '15rem',
                                    background: 'linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)', // Transparent gradient
                                    backdropFilter: 'blur(5px) brightness(1.1) hue-rotate(5deg) saturate(0.9)', // Adjusted blur and saturation
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
                                style={{
                                    width: '20rem',
                                    height: '15rem',
                                    background: 'linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)', // Transparent gradient
                                    backdropFilter: 'blur(5px) brightness(1.1) hue-rotate(5deg) saturate(0.9)', // Adjusted blur and saturation
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
            </div>
        </Base>
    )
};
export default Dashboard;