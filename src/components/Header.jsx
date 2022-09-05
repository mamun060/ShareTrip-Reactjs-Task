import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../assets/images/Full.png'
import styles from '../assets/css/header.module.css'

const Header = () => {
  return (
    <Container fluid={true} className={styles.HeaderWrap}>
     <Container className={styles.innerWrap}>
      <div className={styles.logoStyle}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.menuWrap}>
        <ul className={styles.menuUi}>
          <li>Flight</li>
          <li>Bus</li>
          <li>Hotel</li>
          <li>Visa</li>
          <li>Visa Guide</li>
          <li>Group Request</li>
          <li>Travel Advisory</li>
          <li>Promotions</li>
          <li>Blog</li>
        </ul>
      </div>
     </Container>
    </Container>
  )
}

export default Header