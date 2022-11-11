import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counterSlice";
import { useFetchBreedsQuery } from "./features/dogs/dogsApiSlice";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  const [numDogs, setNumDogs] = useState(10);

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  const handleClick = () => {
    dispatch(incremented());
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite, React, Redux Toolkit... and DOGS.</h1>
      <div className="card">
        <h3>A very handy counter button.</h3>
        <button onClick={handleClick}>Count is {count}</button>
        <br />
        <br />
        <div>
          <h4>How many dogs do you want to see?</h4>
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
            name="dog-count"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="1000">All the dogs</option>
          </select>
        </div>
        <div>
          <br />
          <br />
          <h3>Number of dogs fetched: {data.length}</h3>
          <br />
          <br />
          <table>
            <thead>
              <tr>
                <th>
                  <h3>Breed</h3>
                </th>
                <th>
                  <h3>Behold</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>
                    <h4>{breed.name}</h4>
                  </td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
