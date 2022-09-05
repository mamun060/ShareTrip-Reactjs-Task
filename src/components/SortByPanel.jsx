import React from 'react'
import one from '../assets/images/icons/Vector (Stroke) 1.png';
import two from '../assets/images/icons/Vector (Stroke) 2.png';
import three from '../assets/images/icons/Icon.png';
import styles from '../assets/css/SortByPanel.module.css';
import {Row, Col} from 'react-bootstrap';

const SortByPanel = () => {
  return (
    <Row className={styles.sortPanelWrapper}>
        <Col md={3}>
            <div  className={styles.sortPanelChildWrap}>
                <img src={one} alt="" />
                <span>Earliest Buses</span>
            </div>
        </Col>
        <Col md={3}>
            <div className={styles.sortPaneActiveWrap}>
                <img src={two} alt="" />
                <span>Cheapest Buses</span>
            </div>
        </Col>
        <Col md={3}>
            <div className={styles.sortPanelChildWrap}>
                <img src={three} alt="" />
                <span>Available Seats</span>
            </div>
        </Col>
        <Col md={3}>
            <div className={styles.sortPanelChildWrap}>
                <img src={three} alt="" />
                <span>Fastest Trips</span>
            </div>
        </Col>
    </Row>
  )
}

export default SortByPanel