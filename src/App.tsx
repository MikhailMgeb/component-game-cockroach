import React, { useState } from 'react';

import { GameCockroaches } from './components/GameCockroaches/GameCockroaches';

import './App.css';

export type PlayersStatistics = {
  id?: string;
  userName?: string;
  time?: string | number | null;
}

const App = () => {
  const [playersStatistics, setPlayersStatistics] = useState<PlayersStatistics[]>([]);

  const onChangePlayerList = ({ userName, id, time }: PlayersStatistics) => {
    setPlayersStatistics([...playersStatistics, { userName, id, time }]);
  }

  return (
    <div className="App">
      <GameCockroaches onSetPlayersStatistics={onChangePlayerList} />
      <h2>Leaderboard</h2>
      {playersStatistics.map((player, index) => (
        <div key={index}>
          {player.userName} <em>{player.time}</em>
        </div>
      ))}
    </div>
  );
}

export { App };