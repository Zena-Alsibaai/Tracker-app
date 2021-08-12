// import axios from 'axios';
// import React, { useEffect} from 'react';


// const Genres = (
//     type,
//     selectedGenres,
//     setSelectedGeners,
//     genres,
//     setGenres,
//     setPage,

    
// ) => {

//     const fetchGenres = async () => {
//         const {data} = await axios.get(
//             `https://api.themoviedb.org/3/genre/movie/list?api_key=6b89598c1a9cdba489393e7dcf30a2e2&language=en-US`
//         );
//         setGenres(data.genres)
//     }
//     console.log(genres)
    
//         //eslint-disable-next-line
//         useEffect(() => {
//             fetchGenres();

//             // return () => {
//             //     setGenres([])
//             // }

//         }, [])

  
//         return (
//             <div>
            
//             </div>
//     );
// };


// export default Genres;