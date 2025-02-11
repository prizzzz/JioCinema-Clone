import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import JCLogo from "../../assets/jc_logo_v2.svg";
import crown from "../../assets/crown.svg";
import searchIcon from "../../assets/ic_search.svg";
import voiceSearchIcon from "../../assets/voice-search.svg";
import avtar from "../../assets/avatar_guest.svg";
import Show from "../Show/Show";

function Header(props) {
  let navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];
  let [searchTitle, setSearchTitle] = useState("");
  let [filteredMovies, setFilteredMovies] = useState([]);
  let [activeNav, setActiveNav] = useState("Home"); // ✅ Track active link

  useEffect(() => {
    if (searchTitle !== "") {
      let filterMovies = props.movies.filter((movie) => {
        return movie.name.toUpperCase().includes(searchTitle.toUpperCase());
      });
      setFilteredMovies(filterMovies);
    } else {
      setFilteredMovies([]);
    }
  }, [searchTitle]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <div className={styles.logo}>
            <img src={JCLogo} alt="logo" width="50%" />
            <div className={styles.premium}>
              <img src={crown} alt="crown" />
              <p>Go Premium</p>
            </div>
          </div>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => {
              return (
                <li
                  key={link}
                  className={`${styles.navLink} ${
                    activeNav === link ? styles.activeNavLink : ""
                  }`}
                  onClick={() => setActiveNav(link)} // ✅ Change active link on click
                >
                  {link}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.search}>
          <div className={styles.searchBox}>
            <div className={styles.headerIcon}>
              <img src={searchIcon} alt="searchIcon" width="55%" />
            </div>
            <input
              type="text"
              onChange={(event) => {
                setSearchTitle(event.target.value);
              }}
              className={styles.searchInput}
              placeholder="Movies, Shows and more"
            />
            <div className={styles.headerIcon}>
              <img src={voiceSearchIcon} alt="voiceSearchIcon" width="28%" />
            </div>
          </div>
          <img src={avtar} alt="jioIcon" className={styles.userIcon} />
        </div>
      </header>
      {filteredMovies.length !== 0 ? (
        <div className={styles.searchResults}>
          {filteredMovies.map((movie) => {
            return (
              <div key={movie.id} className={styles.searchItem}>
                <Show movie={movie} />
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}

export default Header;

// import React, { useEffect, useState } from 'react'
// import styles from './Header.module.css'
// import JCLogo from '../../assets/jc_logo_v2.svg'
// import crown from '../../assets/crown.svg'
// import searchIcon from '../../assets/ic_search.svg'
// import voiceSearchIcon from '../../assets/voice-search.svg'
// import jioIcon from '../../assets/jio-logo.png'
// import avtar from '../../assets/avatar_guest.svg'
// import Show from '../Show/Show'


// function Header(props) {
//   let navLinks = ["Home","sports","Movies","TV Shows","More"]
//   let [searchTitle, setSearchTitle] = useState("");
//   let [filteredMovies, setFilteredMovies] =useState([]);

//   useEffect(()=>{
//     if (searchTitle!==""){
//       let filterMovies = props.movies.filter((movie)=>{
//         return movie.name.toUpperCase().includes(searchTitle.toUpperCase())
//       })
//       setFilteredMovies(filterMovies)
//     }
//     else{
//       setFilteredMovies([])
//     }

//   },[searchTitle])

//   return (
//     <>
//       <header className={styles.header}>
//         <nav className={styles.navigation}>
//           <div className={styles.logo}>
//             <img src={JCLogo} alt="logo" width="50%"/>
//             <div className={styles.premium}>
//               <img src={crown} alt="crown" />
//               <p>Go Premium</p>
//             </div>
//           </div>
//           <ul className={styles.navLinks}>
//             {
//               navLinks.map((link)=>{
//                 return <li className={styles.navLink}>{link}</li>
//               })
//             }
//           </ul>
//         </nav>
//         <div className={styles.search}>
//           <div className={styles.searchBox}>
//             <div className={styles.headerIcon}>
//               <img src={searchIcon} alt="searchIcon" width="55%"/>
//             </div>
//             <input type="text" onChange={(event)=>{
//               setSearchTitle(event.target.value)
//             }} className={styles.searchInput} placeholder='Movies, Shows and more'/>
//             <div className={styles.headerIcon}>
//               <img src={voiceSearchIcon} alt="voiceSearchIcon" width="28%"/>
//             </div>
//           </div>
//           <img src={avtar} alt="jioIcon" className={styles.userIcon}/>
//         </div>
//       </header>
//       {
//         filteredMovies.length!==0?(<div className={styles.searchResults}>
//           {
//             filteredMovies.map((movie)=>{
//               return (
//                 <div key={movie.id} className={styles.searchItem}> 
//                   <Show movie={movie} />
//                 </div>)
//             })
//           }
//         </div>):null
//       }

      
//     </>
//   )
// }

// export default Header
