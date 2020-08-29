//this component is to render the homepage of this application

import React, {Component} from 'react'; 
import MovieCard from '../components/MovieCard';

import MovieSlider from '../components/MovieSlider';
class Home extends Component {
    render() {
        return (
        <div className ="home-container">
            <h1 className="home-title">CouchPotato - Browse for Your Favourite Movies Here!</h1>

            <MovieSlider type="popular" count="10"/>
            <div className="container content no-pad">
                <h2>Top Rated Movies</h2>
                <MovieCard type="top_rated" count="10"/>
                <h2>Now Playing</h2>

                <MovieCard type="now_playing" count="10"/>

            </div>
        </div>
        

        )
    }
}

export default Home;