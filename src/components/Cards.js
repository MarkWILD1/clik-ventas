import React, { useEffect } from 'react'
import { Card, Button, CardGroup} from 'react-bootstrap'
import './Cards.css'
import Store1 from '../assets/Cards/Card1_00000.jpg'
import Store2 from '../assets/Cards/Card2_00000.jpg'
import Store3 from '../assets/Cards/Card3_00000.jpg'
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
            <Card className="Group" id="Card">
                <Card.Img className="Group" variant="top" src={Store1} />
                <Card.Body>
                    <Card.Title className="Group">Tienda</Card.Title>
                    <Card.Text className="Group">
                        Servicios generales
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="Group" style={{ height: '5rem', width: '5rem'}} variant="primary">Click</Button>
                </Card.Footer>
            </Card>
            <Card className="Group">
                <Card.Img className="Group" variant="top" src={Store2} />
                <Card.Body>
                        <Card.Title className="Group">Tienda2</Card.Title>
                    <Card.Text className="Group">
                            Servicios generales
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="Group" style={{ height: '5rem', width: '5rem'}} variant="primary">Click</Button>
                </Card.Footer>
            </Card>
            <Card className="Group">
                <Card.Img className="Group" variant="top" src={Store3} />
                <Card.Body>
                    <Card.Title className="Group">Tienda3</Card.Title>
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


