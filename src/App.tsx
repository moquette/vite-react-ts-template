import { useState } from 'react';
import reactLogo from './assets/react.svg';
import tslogo from './assets/ts.png';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo inline-block" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react inline-block"
            alt="React logo"
          />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank">
          <img src={tslogo} className="logo ts inline-block" alt="TS logo" />
        </a>
      </div>
      <h1>Vite + React + TS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
