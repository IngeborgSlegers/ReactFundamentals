import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Classic from './Classic';
import FatArrow from './FatArrow';

const FunctionalComponentDemo = () => {
  return (
    <Container className="main">
      <Row>
        <Col xs="12">
          <h1>Functional Component</h1>
          <p>Functional components allow you to render information to the webpage without having to user or change state.</p>
          <dl>
            <dt>Presentational</dt>
            <dd>Often used for simply rendering a small chunk of code to the DOM.</dd>
            <dt>No 'this' Keyword</dt>
            <dd>Unlike class components, functional ones don't use 'this'.</dd>
            <dt>No State</dt>
            <dd>These are 'dumb' components for UI.</dd>
            <dt>return()</dt>
            <dd>Must return a single element</dd>
          </dl>
        </Col>
      </Row>
      <hr />
      <h1>Function-Off!</h1>
      <Row>
        <Col md="6">
          <Classic />
        </Col>
        <Col md="6">
          <FatArrow />
        </Col>
      </Row>
    </Container>
  )
}

export default FunctionalComponentDemo;