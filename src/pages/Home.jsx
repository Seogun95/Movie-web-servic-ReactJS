import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

//TODO: 로딩 텍스트

//TODO: response 값을 받아 오면 모든 영화 뿌려주기
// ㄴ 영화 API : https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year

//TODO: 상세 페이지 전환
// ㄴ npm i react-router-dom

function Home() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
      )
    ).json();

    setMovie(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>영화 보자</h1>
      {loading ? (
        <h1> 로딩중... </h1>
      ) : (
        <div>
          {movie.map((item, i) => (
            <Movie
              key={i}
              img={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
