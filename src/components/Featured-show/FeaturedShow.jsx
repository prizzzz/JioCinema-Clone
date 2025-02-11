import React from 'react'
import styles from './featuredShow.module.css'

function FeaturedShow(props) {
  return (
    <div className={styles.featuredShows}>
      <img src={props.movie.imageUrl} alt="" />
      <div className={styles.movieTitle}>
        {props.movie.name}
      </div>
    </div>
  )
}

export default FeaturedShow
