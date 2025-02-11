import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Tags from "../components/Tags/Tags";
import Channel from "../components/Channels/Channel";
import Banner from "../components/Banner/Banner";
import Featured from "../components/Featured/Featured";
import Shows from "../components/Shows/Shows";
import Footer from "../components/Footer/Footer";

function Home() {

  let [movies, setMovies] = useState([]);
  let [bannerMovies, setBannerMovies] = useState([]);
  let [featuredMovies, setFeaturedMovies]= useState([]);
  let [dramaMovies, setDramaMovies]= useState([]);
  let [marathiMovies, setMarathiMovies]= useState([]);
  let [hindiMovies, setHindiMovies]= useState([]);
  let [englishMovies, setEnglishMovies]= useState([]);
  let [topRatedMovies, setTopRatedMovies]= useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        let movieResponse = await fetch("http://localhost:3000/movies");
        let moviesData = await movieResponse.json();
        setMovies(moviesData);

        //filter for banner Movies
        let bannerMoviesData = moviesData.filter((movie) => {
          return movie.featured === true;
        }).sort((a, b) => b.imdb - a.imdb).slice(0, 5);
        setBannerMovies(bannerMoviesData);
      

        //filter for featured movies
        let featMovies = moviesData.filter((movies) => {
          return movies.featured === true;
        })
        setFeaturedMovies(featMovies);
        

        //filter for drama movies
        let draMovies = moviesData.filter((movies)=>{
          return movies.genre.includes("Drama")
        })
        setDramaMovies(draMovies)
        
         // filter for marathi Movies
         let marMovies = moviesData.filter((movies)=>{
          return movies.language.includes("Marathi")
        })
        setMarathiMovies(marMovies)


        // filter for Hindi Movies
        let hinMovies = moviesData.filter((movies)=>{
          return movies.language.includes("Hindi")
        })
        setHindiMovies(hinMovies)
        

        // filter for English Movies
        let engMovies = moviesData.filter((movies)=>{
          return movies.language.includes("English")
        })
        setEnglishMovies(engMovies)
    
        // filter for top rated Movies
        let topRMovies = moviesData.filter((movies)=>{
          return movies.imdb>=8.5
        })
        setTopRatedMovies(topRMovies)


      } catch (err) {
        console.log("Error fetching movies:", err);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Header movies={movies} />
      <Tags />
      <Banner movies={bannerMovies}/>
      <Channel />
      <Featured movies={featuredMovies}/>
      <Shows title="Top Rated Movies" movies={topRatedMovies}/>
      <Shows title="Drama Movies" movies={dramaMovies}/>
      <Shows title="Marathi Movies" movies={marathiMovies}/>
      <Shows title="Hindi Movies" movies={hindiMovies} />
      <Shows title="English Movies" movies={englishMovies}/>
      <Footer/>
    </>
  );
}

export default Home;
