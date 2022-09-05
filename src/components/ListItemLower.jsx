import React from 'react';
import styles from '../assets/css/ListItemLower.module.css';
import {Row, Col, Form} from 'react-bootstrap';
import one from '../assets/images/seat/Seat.png';
import two from '../assets/images/seat/Seat-5.png';
import three from '../assets/images/seat/Seat-2.png';
import four from '../assets/images/seat/Seat-3.png';
import five from '../assets/images/seat/Seat-4.png';
import seat from '../assets/images/seat/Seat A4.png';

const ListItemLower = () => {
  return (
    <Row>
      <Col md={8}>

        <Row>
          <Col md={6}>
            <div className={styles.selectItemWrapper}>
              <label htmlFor="">Boarding Point</label>
                <Form.Select aria-label="Default select example">
                  <option>Kolabagan Counter</option>
                  <option value="">Dhaka</option>
                  <option value="">Cumilla</option>
                  <option value="">Jessore</option>
                </Form.Select>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.selectItemWrapper}>
              <label htmlFor="">Dropping Point</label>
                <Form.Select aria-label="Default select example">
                  <option>Kolabagan Counter</option>
                  <option value="">Dhaka</option>
                  <option value="">Cumilla</option>
                  <option value="">Jessore</option>
                </Form.Select>
            </div>
          </Col>
        </Row>

        <div className={styles.seatListWrapper}>
          <div className={styles.seatListStyle}>
            <img src={one} alt="" />
            <span>3 Sold Out</span>
          </div>
          <div className={styles.seatListStyle}>
            <img src={two} alt="" />
            <span>2 Booked</span>
          </div>
          <div className={styles.seatListStyle}>
            <img src={three} alt="" />
            <span>2 Selected</span>
          </div>
          <div className={styles.seatListStyle}>
            <img src={four} alt="" />
            <span>14 Available</span>
          </div>
          <div className={styles.seatListStyle}>
            <img src={five} alt="" />
            <span>20 Blocked</span>
          </div>
        </div>

      </Col>
      <Col md={4}>
        <div className={styles.LowerRightSection}>

          <div className={styles.RightButtonGroup}>
            <a className={styles.btnWithBg} href="#">Sent Info</a>
            <a className={styles.btnWithoutBg} href="#">policy</a>
          </div>

          <div className={styles.RightSeatGreenWrapper}>
            <div className={styles.GreenSeatChild}>
              <img src={seat} alt="" />
              <span>B4</span>
              <span>B-Class</span>
            </div>
            <div className={styles.GreenTicketPrice}>
              <h2>BDT 750</h2>
            </div>
          </div>

          <div className={styles.RightSeatGreenWrapper}>
            <div className={styles.GreenSeatChild}>
              <img src={seat} alt="" />
              <span>B4</span>
              <span>B-Class</span>
            </div>
            <div className={styles.GreenTicketPrice}>
              <h2>BDT 750</h2>
            </div>
          </div>

          <div className={styles.RightWrapSectionDivider}></div>

          <div className={styles.RightSeatGreenWrapper}>
            <div className={styles.GreenSeatChild}>
              <span>Charge:</span>
            </div>
            <div className={styles.GreenTicketPrice}>
              <h2>BDT 50</h2>
            </div>
          </div>

          <div className={styles.RightSeatGreenWrapper}>
            <div className={styles.GreenSeatChild}>
              <span>Insurance:</span>
            </div>
            <div className={styles.GreenTicketPrice}>
              <h2>BDT 20</h2>
            </div>
          </div>

          <div className={styles.RightWrapSectionDivider}></div>

          <div className={styles.RightSeatGreenWrapper}>
            <div className={styles.GreenSeatChild}>
              <span>Sub Total:</span>
            </div>
            <div className={styles.GreenTicketSubtota}>
              <h2>BDT 1,570</h2>
            </div>
          </div>

        </div>
      </Col>
    </Row>
  )
}

export default ListItemLower