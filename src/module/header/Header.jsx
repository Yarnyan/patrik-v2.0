import React from 'react'
import styles from './Header.module.scss'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EmailIcon from '@mui/icons-material/Email';
export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <div>
                    <p>Patrick v2.0</p>
                    <div>

                    </div>
                </div>
                <div className={styles.links}>
                    <ShoppingBasketIcon />
                    <div>
                        <AttachMoneyIcon />
                        <p>0</p>
                    </div>
                    <div>
                        <EmailIcon />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}
