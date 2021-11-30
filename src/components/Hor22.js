import React from 'react'
import { Card, Button} from 'react-bootstrap'
import Banner2 from '../assets/banner 11.jpg'

const Hor22 = () => {
  return (
    
        <Card className="bg-dark text-white">
          <Card.Img src={Banner2} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Banner 2</Card.Title>
            <Card.Text>
              Tu Anuncio
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Button style={{ height: '5rem', width: '5rem', borderRadius: '50px',}} variant="primary">Click</Button>
          </Card.ImgOverlay>
        </Card>
    
  )
}

export default Hor22





