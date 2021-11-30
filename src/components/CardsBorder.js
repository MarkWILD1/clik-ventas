import React, { useEffect } from 'react'
import { Card, Button, CardGroup} from 'react-bootstrap'
import Abogado from '../assets/Cards/Card4_00000.jpg'
import Escribano from '../assets/Cards/Card5_00000.jpg'
import Dentista from '../assets/Cards/Card6_00000.jpg'
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
                <Card.Img className="CardBorder" variant="top" src={Abogado} />
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
                <Card.Img className="CardBorder" variant="top" src={Escribano} />
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
                <Card.Img className="CardBorder" variant="top" src={Dentista} />
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
