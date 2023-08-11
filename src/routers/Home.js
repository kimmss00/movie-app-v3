import React,{useEffect, useState} from "react";
import Movie from "../components/Movie";
import "./Home.css";

function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
    
    const getMoviesData = () => {
        fetch('https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page=1',{method:"GET"})
            .then((response)=> response.json())
            .then(data=>{
                console.log(data)
                setIsLoading(false);
                let movies = data.data.movies;
                setMovies(movies);
            })
            .catch(e=>console.log(e));
        
        console.log(movies);
    }
    useEffect(() =>{
        console.log("didMount");
        getMoviesData();
        console.log("didUpdate");
        return () => {
            console.log("willUmmount");
        }
    },[]);

    return (
        <section className="container">
            {isLoading?(
                <div className="loader">
                    <span className="loader_text">Loading...</span>
                </div>
            ) : (
                <div className="movies">
                {
                    movies.map((movie)=>{
                        return (
                            <Movie
                                key={movie.id}
                                id={movie.id} 
                                year={movie.year}
                                title={ movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        );
                    })
                }
            </div>
            )}
        </section>
    );
}

export default Home;