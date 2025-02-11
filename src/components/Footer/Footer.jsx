import React from 'react'
import styles from '../Footer/footer.module.css'
import facebook from '../../assets/facebook.svg'
import x from '../../assets/x.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'
import appleStore from '../../assets/appleStore.svg'
import googlePlay from '../../assets/googlePlay.svg'
import jioLogo from '../../assets/jio-logo.png'
export default function Footer() {
    let jioCinemaList =["For you","Sports","Movies","Tv shows"];
    let supportList = ["Help Center","Terms of Use","Privacy Policy","Content Complaints"];
  return (
    <>
        <footer className={styles.footer}>
            <div className={styles.leftContainer}>
                <div className={styles.jioCinemaContainer}>
                    <h2>JioCinema</h2>
                    <ul>
                        {
                            jioCinemaList.map((list)=>{
                                return <li>{list}</li>
                            })
                        }
                    </ul>
                </div>
                <div className={styles.supportContainer}>
                    <h2>Support</h2>
                    <ul>
                        {
                            supportList.map((list)=>{
                                return <li>{list}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.rightContainer}>
            <div className={styles.connectContainer}>
                    <h2>Connect With Us</h2>
                    <ul>
                        <li><img src={facebook} alt="" /></li>
                        <li><img src={x} alt="" /></li>
                        <li><img src={instagram} alt="" /></li>
                        <li><img src={youtube} alt="" /></li>
                    </ul>
                </div>
                <div className={styles.downloadContainer}>
                    <h2>Download the App</h2>
                    <ul>
                        <li><img src={googlePlay} alt="" /></li>
                        <li><img src={appleStore} alt="" /></li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className={styles.copywriteContainer}>
            <p>Copyright © Star India Private Limited, 2024. All rights reserved.</p>
            <img src={jioLogo} alt="" />
        </div>
      
    </>
  )
}
