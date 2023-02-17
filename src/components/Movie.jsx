import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ ...props }) {
  return (
    <>
      <div>
        <img src={props.img} alt={'이미지'} />
        <h1>
          <Link to={`/movie/${props.id}`}>{props.title}</Link>
        </h1>
        <p>{props.summary}</p>
        <div>
          {props.genres?.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </div>
      </div>
    </>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
