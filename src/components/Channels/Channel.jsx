import React from 'react'
import styles from './channel.module.css'
import Channel1 from '../../assets/channel1.jpg'
import Channel2 from '../../assets/channel2.png'
import Channel3 from '../../assets/channel3.jpg'
import Channel4 from '../../assets/channel4.jpg'
import Channel5 from '../../assets/channel5.jpg'
import Channel6 from '../../assets/channel6.jpg'
import Channel7 from '../../assets/channel7.jpg'
import Channel8 from '../../assets/channel8.avif'
import Channel9 from '../../assets/channel9.avif'
import Channel10 from '../../assets/channel10.avif'


function Channel() {
  return (
    <>
        <div className={styles.channels}>
            <img src={Channel1} alt="channel1" />
            <img src={Channel2} alt="channel2" />
            <img src={Channel3} alt="channel3" />
            <img src={Channel4} alt="channel4" />
            <img src={Channel5} alt="channel5" />
            <img src={Channel6} alt="channel6" />
            <img src={Channel7} alt="channel7" />
            <img src={Channel8} alt="channel8" />
            <img src={Channel9} alt="channel9" />
            <img src={Channel10} alt="channel10" />
        </div>
      
    </>
  )
}

export default Channel
