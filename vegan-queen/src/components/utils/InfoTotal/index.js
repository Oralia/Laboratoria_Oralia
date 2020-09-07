import React, { Fragment } from 'react'
import styles from './style.module.css'
import ButtonNext from "../ButtonNext"
import arrow from '../../assets/img/arrow.svg'

const InfoTotal = () => {
    return (
        <Fragment>
            <div className={styles.containerTotal}>
                <div className={styles.iconProduct}>
                    <img src={arrow} alt="" width= '50px'/>
                </div>
                <div className={styles.totalData}>
                    <div>
                        <p>Total</p>
                        <input type="text" placeholder='Money money'/>
                    </div>
                    <br/>
                    <ButtonNext
                    /* text='Enviar a cocina' */
                    />
                </div>  
            </div>
            
        </Fragment>
    )
}

export default InfoTotal
