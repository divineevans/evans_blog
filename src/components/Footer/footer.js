import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config';


const Footer = () =>(
    <div className={styles.footer}>
       <Link to="/" className={styles.logo}>
            <img alt="reenevans logo" src="/images/logo.jpg"/>
       </Link>
       <div className={styles.right}>
           @Aldivine {CURRENT_YEAR} All rights reserved.

       </div>
    </div>
)

export default Footer;