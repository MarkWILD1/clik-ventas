import React from 'react'
import { Card, Button} from 'react-bootstrap'
import horizontal2 from '../assets/ej3.jpg'
import './CardHorizontal.css'

const CardHorizontal = () => {
    return (
        <Card className="horizontal2">
            <Card.Img src={horizontal2} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Agroveterinaria</Card.Title>
                <Card.Text>
                    Servicioos generales
                </Card.Text>
                <Button style={{ height: '5rem', width: '5rem', borderRadius: '50px',}} variant="primary">Click</Button>
            </Card.ImgOverlay>
        </Card>
    )
}

export default CardHorizontal