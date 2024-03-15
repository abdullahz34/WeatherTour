import React from 'react'

import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <img
          alt="pastedImage"
          src="/pastedimage-0czh-200h.png"
          className={` ${styles['pasted-image']} ${projectStyles['button']} `}
        />
      </div>
    </div>
  )
}

export default Home