import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Classic = () => {
  return(
    <div>
      <Card>
        <img width="100%" height="280px" src={require('../../assets/classic.png')} alt="Card cap" />
        <CardBody>
          <CardTitle>Regular Ole Function</CardTitle>
          <CardSubtitle>A JS Library</CardSubtitle>
          <CardText><pre>const HelloWorld = function() </pre>.</CardText>
          <Button>Go somewhere, yo</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Classic;