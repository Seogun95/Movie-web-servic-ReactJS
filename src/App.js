import { useState, useEffect } from 'react';
//TODO: 로딩 텍스트

//TODO: response 값을 받아 오면 모든 영화 뿌려주기
// ㄴ 영화 API : https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year

//TODO: 상세 페이지 전환

function App() {
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
    console.log(movie);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movie);

  return (
    <>
      <h1>영화 보자</h1>
      {loading ? (
        <h1> 로딩중... </h1>
      ) : (
        <div>
          {movie.map((item, i) => (
            <div key={i}>
              <img src={item.medium_cover_image} alt={'이미지'} />
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div>
                {/* 배열인 값이 있다면 다시 한번 Map */}
                {/*genres라는 장르가 존재하지 않을수도있기 때문에 옵셔널 체이닝을 사용할 수 있다.*/}
                {item.genres?.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
