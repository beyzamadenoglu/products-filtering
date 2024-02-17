import React, { ReactNode } from 'react';
import './Layout.scss';
import Filter from '../Components/Filter/Filter.tsx';
import Header from '../Components/Header/Header.tsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const withLayout = (PageContent: ReactNode) => {
  return function fn(_props: unknown) {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <Container fluid>
        <Row>
        <Col style={{paddingTop: "91px"}} xs={2}>
          <Filter />
        </Col>
            <Col xs={10}>
            {PageContent}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default withLayout;
