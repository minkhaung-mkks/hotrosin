import Image from 'next/image'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.nav_bar}>
        <img className={styles.nav_logo} src="/imgs/logo/ol.png" alt="" />
    </div>
  )
}

export default Nav