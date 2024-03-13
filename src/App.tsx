import React, { useState } from 'react';
import { uid } from 'uid';
import { name } from 'react-lorem-ipsum';

import { Cockroach, CockroachCard } from './components/Cockroach/Cockroach';
import { StartGameButton } from './components/StartGameButton/StartGameButton';
import imageFirst from '../src/components/assets/cockroach-type-1.png';
import imageSecond from '../src/components/assets/cockroach-type-2.png';
import Third from '../src/components/assets/cockroach-type-3.png';

import './App.css';

type PlayerStatistics = {
  name: string;
  timer: string;
}

const createCollectionCockroach = () => {
  const imagesCockroach = [imageFirst, imageSecond, Third];
  const collectionCockroaches: CockroachCard[] = [];

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.ceil(Math.random() * 3) - 1;

    collectionCockroaches.push({
      id: uid(),
      image: imagesCockroach[randomIndex]
    })
  }
  return collectionCockroaches;
}

const App = () => {
  const [cockroaches, setCockroaches] = useState<CockroachCard[]>([]);

  const [statistics, setStatistics] = useState<PlayerStatistics[]>([]);

  const startGame = () => {
    setStatistics(prev => ({
      ...prev,
      name: name(),
      timer: 123,
    })
    )
  }

  const handleGameStarted = () => {
    setCockroaches(createCollectionCockroach());
  }

  const killCockroach = (CockroachId: string | undefined) => {
    setCockroaches(prev => prev.filter((item) => (item.id !== CockroachId)));
  }

  return (
    <div className="App">
      <StartGameButton onChangeStatusGame={handleGameStarted} isOpened={cockroaches.length !== 0} startGame={startGame} />

      <Cockroach collectionCockroaches={cockroaches} onKillCockroach={killCockroach} />
    </div>
  );
}

export { App };



// const [startTimer, setTimer] = useState('');

// const start = new Date().getTime();
// const end = new Date().getTime();