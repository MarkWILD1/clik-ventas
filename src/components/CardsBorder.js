import React, { useEffect } from 'react'
import { Card, Button, CardGroup} from 'react-bootstrap'
import './CardsBorder.css'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const CardsBorder = () => {
    useEffect(() => {
        const CardBorder = document.querySelectorAll('.CardBorder')
        gsap.from(CardBorder, 
            {
                opacity: 0, 
                x:-100,
                delay: 0.6,
                stagger: 0.3, 
                duration: 2,  
                scrollTrigger: {
                    trigger: CardBorder,
                    start: "top center",
                    end: "bottom center", 
                }});
    }, [])
    return (
        <CardGroup>
            <Card className="CardBorder">
                <Card.Img className="CardBorder" variant="top" src="https://blog.ipleaders.in/wp-content/uploads/2020/04/default-lawyers-5.jpg" />
                <Card.Body>
                    <Card.Title className="CardBorder">Abogado</Card.Title>
                    <Card.Text className="CardBorder">
                        Servicios generales
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="CardBorder" style={{ height: '5rem', width: '5rem'}} variant="primary">Click</Button>
                </Card.Footer>
            </Card>
            <Card className="CardBorder">
                <Card.Img className="CardBorder" variant="top" src="https://armandpilon.com.uy/wp-content/uploads/2020/05/escribano-en-uruguay.jpg" />
                <Card.Body>
                        <Card.Title className="CardBorder">Escribano</Card.Title>
                    <Card.Text className="CardBorder">
                            Servicios generales
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="CardBorder" style={{ height: '5rem', width: '5rem'}} variant="primary">Click</Button>
                </Card.Footer>
            </Card>
            <Card className="CardBorder">
                <Card.Img className="CardBorder" variant="top" src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/11/16/5fcc3e06c4dbf.jpeg" />
                <Card.Body>
                    <Card.Title className="CardBorder">Dentista</Card.Title>
                    <Card.Text className="CardBorder">
                        Servicios generales
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="CardBorder" style={{ height: '5rem', width: '5rem'}} variant="primary">Click</Button>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default CardsBorder
