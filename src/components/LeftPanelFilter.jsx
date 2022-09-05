import React from 'react'
import {Form} from 'react-bootstrap'

import styles from '../assets/css/LeftPanelFilter.module.css';

const LeftPanelFilter = () => {
  return (
    <div className={styles.LeftPanelWrapper}>
        <div className={styles.TopSectionHeading}>
            <h4>sort & filter</h4>
            <h2>RESET</h2>
        </div>
        <div className={styles.priceSection}>
            <h2>Price Range</h2>
            <div>
               <div className={styles.RangeSliderWrapper}>
                    <div className={styles.minMaxPriceWrap}>
                        <p>Minimum Price</p>
                        <h2>500</h2>
                    </div>
                    <div className={styles.minMaxPriceWrap}>
                        <p>Maximum Price</p>
                        <h2>3213</h2>
                    </div>
               </div>
                <Form.Range min="10" max="50" />
            </div>
        </div>

        <div className={styles.classSection}>
        <h2>Class</h2>
         <div className={styles.CheckBoxWrapper}>
            <div className={styles.classCheckBoxes}>
                <input type="checkbox" name="" value="" /> <label htmlFor="">AC (40)</label> <br />
            </div>
            <div className={styles.classCheckBoxes}>
                <input type="checkbox" name="" value="" /> <label htmlFor=""> Non AC (24)</label>
            </div>
         </div>
        </div>

        <div className={styles.scheduleSection}>
        <h2>Schedule</h2>
         <div className={styles.ScheduleListWrapper}>
            <p>Departure Time</p>
            <div className={styles.ScheduleCheckBoxes}>
                <input type="checkbox" name="" value="" /> <label htmlFor="">00:00 - 05:59</label> <br />
            </div>
            <div className={styles.ScheduleCheckBoxes}>
                <input type="checkbox" name="" value="" /> <label htmlFor="">06:00 - 11:59</label>
            </div>
            <div className={styles.ScheduleCheckBoxes}>
                <input type="checkbox" name="" value="" /> <label htmlFor="">12:00 - 17:59</label>
            </div>
            <div className={styles.ScheduleCheckBoxes}>
                <input type="checkbox" name="" value="" /> <label htmlFor="">18:00 - 23:59</label>
            </div>
         </div>
        </div>

    </div>
  )
}

export default LeftPanelFilter