import {useState } from 'react';
import './App.css';

interface time {
  ms: number;
  sek: number;
  min: number;
  h: number;
}

function App() {
  const [timer, setTimer] = useState<time>({ ms: 0, sek: 0, min: 0, h: 0 });
  const [go, setGo] = useState(undefined);

  const goInterv = () => {
// @ts-ignore
    setGo(setInterval(goTimer, 10));
  };

  let ms = timer.ms;
  let sek = timer.sek;
  let min = timer.min;
  let h = timer.h;

  const goTimer = () => {
    ms += 1
    if (ms === 100) {
      sek += 1;
      ms = 0;
    }
    if (sek === 60) {
      min += 1;
      sek = 0;
    }
    if (min === 60) {
      min = 0;
      h += 1;
    }
    setTimer({ ms, sek, min, h });
  };


  const stopTimer = () => {
    clearInterval(go)
  }

  const resetTimer = () => {
    clearInterval(go)
    setTimer({ ms: 0, sek: 0, min: 0, h: 0 })
  }

  return (
    <div>
      <h1>Timer React</h1>
      <div className="flex gap-20">
        <div className= 'w-[120px] px-2 border-2 border-solid border-white rounded-none'>
          <h1>{`${timer.h }h`}</h1>
        </div>
        <div className= 'w-[120px] px-2 border-2 border-solid border-white rounded-none'>
          <h1>{`${timer.min }m`}</h1>
        </div>
        <div className= 'w-[120px] px-2 border-2 border-solid border-white rounded-none'>
          <h1>{`${timer.sek }s`}</h1>
        </div>
        <div className= 'w-[125px] px-2 border-2 border-solid border-white rounded-none'>
          <h1>{`${timer.ms }ms`}</h1>
        </div>
      </div>
      <div className='flex gap-14 justify-center'>
      <button className='mt-12' onClick={goInterv}>Go</button>
      <button className='mt-12' onClick={stopTimer}>Stop</button>
      <button className='mt-12' onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
