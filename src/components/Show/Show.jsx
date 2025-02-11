import React from 'react'
import styles from './show.module.css'
function Show(props) {
  return (
    <div className={styles.show}>
        <img src={props.movie.imageUrl} alt="" />
        <div className={styles.movieTitle}>
          {props.movie.name}
        </div>
    </div>
  )
}

export default Show
