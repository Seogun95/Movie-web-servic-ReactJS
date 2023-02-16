import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  //컴포넌트가 시작할때 API를 불러오고싶다면 useEffect 사용.
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers?limit=100000')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json);
      });
  }, []);

  return (
    <>
      <h1> Coins! {loading ? '' : `(${coins.length})`} </h1>
      {loading ? (
        <b> Loading...</b>
      ) : (
        <select>
          {coins.map((item, i) => (
            <option key={i}>
              {item.name} ({item.symbol}): ${~~item.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default App;
