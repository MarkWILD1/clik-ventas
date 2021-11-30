import React from 'react'
import { Card, Button} from 'react-bootstrap'
import imgHorizontal from '../assets/Comp 1/b2.jpg'
import './CardHorizontal.css'


const CardHorizontal = () => {
    


    return (
        <Card className="horizontal">
            <Card.Img src={imgHorizontal} alt="jpg" />
            <Card.ImgOverlay>
                <Card.Title>Agroveterinaria</Card.Title>
                <Card.Text>
                    Servicioos generales
                </Card.Text>
                <Button style={{ height: '5rem', width: '5rem', borderRadius: '50px',}} variant="primary">Click</Button>
            </Card.ImgOverlay>
            <br />
        </Card>
        
    )
}

export default CardHorizontal
