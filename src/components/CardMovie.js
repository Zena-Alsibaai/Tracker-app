import React from 'react';
import Badge from '@material-ui/core/Badge';
import {img_300, unavailable} from '../config/config';

const CardMovie = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
 
 
    return (
      <div className="container">
          <div className="media">
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" :  "secondary"} />
            <img 
            className="poster" 
            src={ poster? `${img_300}/${poster}` : unavailable} 
            alt={title} 
            />
            <h3 className="title">{title}</h3>
            <span className="sub-title">
              {/* {media_type === "tv" ? "TV Series" : "Movie"} */}
            </span>
            <span className="subtitle">{date}</span>
            
          </div>
        </div>
    );
};

export default CardMovie;