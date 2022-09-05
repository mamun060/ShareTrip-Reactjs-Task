import React from 'react'
import Header from '../components/Header'
import {Container, Row, Col} from 'react-bootstrap';
import LeftPanelFilter from '../components/LeftPanelFilter';
import SortByPanel from '../components/SortByPanel';
import ListItem from '../components/ListItem';


const Home = () => {
  return (
    <div>
        <Header />
        <Container>
            <Row>
                <Col md={3}>
                    <LeftPanelFilter />
                </Col>
                <Col md={9}>
                    <SortByPanel />
                    <ListItem />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home