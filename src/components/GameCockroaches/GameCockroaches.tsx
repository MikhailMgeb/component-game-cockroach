import React, { useState } from 'react';
import { uid } from 'uid';
import { name } from 'react-lorem-ipsum';

import { Cockroaches } from './Cockroach/Cockroach';
import { StartGameButton } from './StartGameButton/StartGameButton';
import imageFirst from '../../components/assets/cockroach-type-1.png';
import imageSecond from '../../components/assets/cockroach-type-2.png';
import Third from '../../components/assets/cockroach-type-3.png';

import { cnGameCockroaches } from './GameCockroaches.classname';
import { CockroachCard, PlayersStatistics } from './GameTyped';

import './GameCockroaches.css';

const createCollectionCockroach = () => {
    const imagesCockroach = [imageFirst, imageSecond, Third];
    const collectionCockroaches: CockroachCard[] = [];

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.ceil(Math.random() * 3) - 1;

        collectionCockroaches.push({
            id: uid(),
            image: imagesCockroach[randomIndex]
        })
    }
    return collectionCockroaches;
}

const GameCockroaches = () => {
    const [cockroaches, setCockroaches] = useState<CockroachCard[]>([]);
    const [playersStatistics, getPlayersStatistics] = useState<PlayersStatistics[]>([]);
    const [timer, setTimer] = useState<null | number>(null);

    const handleGameStarted = () => {
        setCockroaches(createCollectionCockroach());

        setTimer(Date.now())
        getPlayersStatistics([...playersStatistics, { userName: name(), id: uid() }])
    }

    const killCockroach = (CockroachId: string | undefined) => {
        setCockroaches(prev => prev.filter((item) => (item.id !== CockroachId)));
    }

    if (cockroaches.length === 0) {
        if (timer !== null) {
            const currentTime = Date.now();
            const elapsedTime = (currentTime - timer) / 1000;
            getPlayersStatistics([...playersStatistics, { time: elapsedTime }]);
            setTimer(null);
        }
    }

    return (
        <div className={cnGameCockroaches()}>
            {cockroaches.length === 0 ?
                <StartGameButton onChangeStatusGame={handleGameStarted} /> :
                <Cockroaches collectionCockroaches={cockroaches} onKillCockroach={killCockroach} />
            }
            <div>
                <h2>Leaderboard</h2>
                {playersStatistics.map((player, index) => (
                    <div key={index}>
                        {player.userName} <em>{player.time}</em>
                    </div>
                ))}
            </div>
        </div>

    );
}

export { GameCockroaches };