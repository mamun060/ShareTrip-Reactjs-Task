import React from 'react'
import styles from '../assets/css/ListItemUpper.module.css';
import {Row, Col} from 'react-bootstrap';
import dollarIcon from '../assets/images/icons/Layer 2.png';
import busicon from '../assets/images/icons/Frame 14.png';

const ListItemUpper = () => {
  return (
    <Row>
        <Col md={3}>
            <div className={styles.ListItemUpperOne}>
                <h2>AC</h2>
             <div className={styles.ContentStyleWrapper}>
                <span>From </span>
                <h4>Dhaka <br /> <span>11:30 PM</span> </h4>
                <span>Kolabagan Counter <br /> 22 June 2021</span>
             </div>
            </div>
        </Col>
        <Col md={3}>
            <div className={styles.ListItemUpperTwo}>
                <div className={styles.listWrapButtonTwo}>
                    <a href="#">Hanif Enterprize</a>
                </div>
                <span>31-DHK-CTG(D)</span>
                <div className={styles.listTwoContentWrap}>
                    <img src={busicon} alt="" />
                    <h4>16 Seats available <br /> <span>6h 00m</span></h4>
                </div>
            </div>
        </Col>
        <Col md={2}>
            <div className={styles.ListItemUpperThree}>
                <h2> <img src={dollarIcon} alt="" />
                AC</h2>
                <div className={styles.ContentStyleWrapper}>
                    <span>From </span>
                    <h4>Dhaka <br /> <span>11:30 PM</span> </h4>
                    <span>Kolabagan Counter <br /> 22 June 2021</span>
                </div>
            </div>
        </Col>
        <Col md={4}>
            <div className={styles.ListItemUpperFour}>
                <span>Per Person</span>
                <h2>BDT 750</h2>
                <h4>BDT 775</h4>
                <a href="#">View seats</a>
                <p>Cancellation Policy</p>
            </div>
        </Col>
    </Row>
  )
}

export default ListItemUpper