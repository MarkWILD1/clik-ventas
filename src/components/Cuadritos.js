import React, { useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import './Cuadritos.css'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Cuadritos = () => {
    useEffect(() => {
        const Group1 = document.querySelectorAll('.Group1')
        gsap.from(Group1, 
            {
                opacity: 0, 
                x:-100,
                delay: 0.6,
                stagger: 0.3, 
                duration: 2,  
                scrollTrigger: {
                    trigger: Group1,
                    start: "top center",
                    end: "bottom center", 
                }});
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col className="Group1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tu Anuncio</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtítulo de anuncio</Card.Subtitle>
                                <Card.Text>
                                    Descripción de ejemplo para el anuncio publicado, con el fin de mostrar a tus clientes
                                </Card.Text>
                                <Card.Link href="#">Clik a tu whatsapp</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Group1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tu Anuncio</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtítulo de anuncio</Card.Subtitle>
                                <Card.Text>
                                    Descripción de ejemplo para el anuncio publicado, con el fin de mostrar a tus clientes
                                </Card.Text>
                                <Card.Link href="#">Clik a tu whatsapp</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Group1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tu Anuncio</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtítulo de anuncio</Card.Subtitle>
                                <Card.Text>
                                    Descripción de ejemplo para el anuncio publicado, con el fin de mostrar a tus clientes
                                </Card.Text>
                                <Card.Link href="#">Clik a tu Whatsapp</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Group1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tu Anuncio</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtítulo de anuncio</Card.Subtitle>
                                <Card.Text>
                                    Descripción de ejemplo para el anuncio publicado, con el fin de mostrar a tus clientes
                                </Card.Text>
                                <Card.Link href="#">Clik a tu Whatsapp</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Group1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tu Anuncio</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtítulo de anuncio</Card.Subtitle>
                                <Card.Text>
                                    Descripción de ejemplo para el anuncio publicado, con el fin de mostrar a tus clientes
                                </Card.Text>
                                <Card.Link href="#">Clik a tu whatsapp</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Group1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tu Anuncio</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtítulo de anuncio</Card.Subtitle>
                                <Card.Text>
                                    Descripción de ejemplo para el anuncio publicado, con el fin de mostrar a tus clientes
                                </Card.Text>
                                <Card.Link href="#">Clik a tu whatsapp</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Group1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tu Anuncio</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtítulo de anuncio</Card.Subtitle>
                                <Card.Text>
                                    Descripción de ejemplo para el anuncio publicado, con el fin de mostrar a tus clientes
                                </Card.Text>
                                <Card.Link href="#">Clik a tu whatsapp</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Group1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tu Anuncio</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtítulo de anuncio</Card.Subtitle>
                                <Card.Text>
                                    Descripción de ejemplo para el anuncio publicado, con el fin de mostrar a tus clientes
                                </Card.Text>
                                <Card.Link href="#">Clik a tu whatsapp</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="Group1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Tu Anuncio</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtítulo de anuncio</Card.Subtitle>
                                <Card.Text>
                                    Descripción de ejemplo para el anuncio publicado, con el fin de mostrar a tus clientes
                                </Card.Text>
                                <Card.Link href="#">Clik a tu Whatsapp</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </div>
        
    )
}

export default Cuadritos