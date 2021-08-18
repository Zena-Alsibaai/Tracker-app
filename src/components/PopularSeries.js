import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMovie from './CardMovie';
import CustomPagination from './CustomPagination';


const PopularSeries = () => {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    

    const fetchPopular = async () => {
        const {data} = await axios.get (
            `https://api.themoviedb.org/3/tv/popular?api_key=6b89598c1a9cdba489393e7dcf30a2e2&language=en-US&page=${page}`
        );

        // console.log(data.results);

        setContent(data.results);

    };

    useEffect(() => {
        if(playOnce) {

            fetchPopular();
            setPlayOnce(false);
        }
     
    },[page]);
  
    return (
        <div className="container">
            <div className="popular-movies">
                <h3>Popular Series</h3>
                { 
                    content && content.map((item) => 
                    <CardMovie 
                    key={item.id} 
                    id={item.id} 
                    poster={item.poster_path} 
                    title={item.title || item.name} 
                    date={item.first_air_date || item.release_date} 
                    media_type={item.media_type} 
                    vote_average={item.vote_average}
                    />

                    )}
             </div>
             <CustomPagination setPage={setPage}/>
   
        </div>
    );

};
    

export default PopularSeries;