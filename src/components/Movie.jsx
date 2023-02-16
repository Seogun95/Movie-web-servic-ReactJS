import React from 'react';
import PropTypes from 'prop-types';

function Movie({ ...props }) {
  return (
    <>
      <div>
        <img src={props.img} alt={'이미지'} />
        <h3>{props.title}</h3>
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
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
