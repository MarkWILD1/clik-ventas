import React, { useEffect } from 'react'
import { Card, Button, CardGroup} from 'react-bootstrap'
import './Cards.css'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Cards = () => {
    useEffect(() => {
        const Group = document.querySelectorAll('.Group')
        gsap.from(Group, 
            {
                opacity: 0, 
                x:-100,
                delay: 0.6,
                stagger: 0.3, 
                duration: 2,  
                scrollTrigger: {
                    trigger: Group,
                    start: "top center",
                    end: "bottom center", 
                }});
    }, [])

    return (        
        <CardGroup>
            <Card className="Group">
                <Card.Img className="Group" variant="top" src="https://blog.ipleaders.in/wp-content/uploads/2020/04/default-lawyers-5.jpg" />
                <Card.Body>
                    <Card.Title className="Group">Abogado</Card.Title>
                    <Card.Text className="Group">
                        Servicios generales
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="Group" href="https://bit.ly/Trabalhe_EmSuaCasa" style={{ height: '5rem', width: '5rem'}} variant="primary">Click</Button>
                </Card.Footer>
            </Card>
            <Card className="Group">
                <Card.Img className="Group" variant="top" src="https://armandpilon.com.uy/wp-content/uploads/2020/05/escribano-en-uruguay.jpg" />
                <Card.Body>
                        <Card.Title className="Group">Escribano</Card.Title>
                    <Card.Text className="Group">
                            Servicios generales
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="Group" style={{ height: '5rem', width: '5rem'}} variant="primary">Click</Button>
                </Card.Footer>
            </Card>
            <Card className="Group">
                <Card.Img className="Group" variant="top" src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/11/16/5fcc3e06c4dbf.jpeg" />
                <Card.Body>
                    <Card.Title className="Group">Dentista</Card.Title>
                    <Card.Text className="Group">
                        Servicios generales
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="Group" style={{ height: '5rem', width: '5rem'}} variant="primary">Click</Button>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default Cards 


