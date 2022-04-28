import '../App.css';
import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='homeSection'>
          <h1 className='_6figs'>6 Figures</h1>
          <button className='subBtn'>Subscribe</button>
        </div>

        {/*what we do*/}

        <div className='wWd'>
          <Container>
            <Row className='text-center'>
              <Col lg={12}>
                <h3>What We Do</h3>
              </Col>
              <Col md={6} lg={4}>
                <Image
                  className='img'
                  src='https://images.unsplash.com/photo-1650477151032-3472bb32e9dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                  roundedCircle
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate expedita in dignissimos aspernatur at molestiae
                  debitis, ipsa labore adipisci quis.
                </p>
              </Col>
              <Col md={6} lg={4}>
                <Image
                  className='img'
                  src='https://images.unsplash.com/photo-1650477151032-3472bb32e9dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                  roundedCircle
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate expedita in dignissimos aspernatur at molestiae
                  debitis, ipsa labore adipisci quis.
                </p>
              </Col>
              <Col md={6} lg={4} className='mx-auto'>
                <Image
                  className='img'
                  src='https://images.unsplash.com/photo-1650477151032-3472bb32e9dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                  roundedCircle
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptate expedita in dignissimos aspernatur at molestiae
                  debitis, ipsa labore adipisci quis.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
