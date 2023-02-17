import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  //동적으로 변경되는 url의 ID를 받아옴
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getMovies = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json);
    };

    getMovies();
  }, [id]);

  return <></>;
}

export default Detail;
