import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const FatArrow = () => {
  return(
    <div>
      <Card>
        <img width="100%" height="280px" src={require('../../assets/fatarrow.png')} alt="Card cap" />
          <CardBody>
            <CardTitle>Fat Arrow</CardTitle>
            <CardSubtitle>A JS Library</CardSubtitle>
            <CardText><pre>const HelloWorld = () => </pre>.</CardText>
            <Button>Go somewhere man</Button>
          </CardBody>
      </Card>
    </div>
  )
}

export default FatArrow;