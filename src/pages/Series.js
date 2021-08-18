import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardMovie from '../components/CardMovie';
import CustomPagination from '../components/CustomPagination';

const Series = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState();


    const fetchMovies = async () => {
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/discover/tv?api_key=6b89598c1a9cdba489393e7dcf30a2e2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`
        )
       setContent(data.results)
       setNumberOfPages(data.total_pages)
    };

    useEffect (() => {
        fetchMovies()
    },[page])


    return (
        <div className="series">
            <h3 className="page-title">Hello From Series Page</h3>
            <div className="tv">
                    { 
                        content && content.map((item) => 
                        <CardMovie
                        key={item.id} 
                        id={item.id} 
                        poster={item.poster_path} 
                        title={item.title || item.name} 
                        date={item.first_air_date || item.release_date} 
                        // media_type="tv "
                        vote_average={item.vote_average}
                        />

                        )}
                </div>
                {numberOfPages > 1 && (
                    <CustomPagination setPage={setPage}  numberOfPages={numberOfPages}/>
                )}
        </div>
    );
};

export default Series;