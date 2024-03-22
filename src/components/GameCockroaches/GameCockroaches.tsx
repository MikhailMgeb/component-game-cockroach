import React, { FC, useState } from 'react';
import { uid } from 'uid';
import { name } from 'react-lorem-ipsum';

import imageFirst from '../../components/assets/cockroach-type-1.png';
import imageSecond from '../../components/assets/cockroach-type-2.png';
import Third from '../../components/assets/cockroach-type-3.png';
import { Cockroaches } from './Cockroaches/Cockroaches';
import { StartGameButton } from './StartGameButton/StartGameButton';
import { CockroachCard } from './GameTyped';
import { PlayersStatistics } from '../../App';
import { cnGameCockroaches } from './GameCockroaches.classname';

import './GameCockroaches.css';

type GameCockroachesProps = {
    onSetPlayersStatistics: (player: PlayersStatistics) => void;
}

const createCollectionCockroach = () => {
    const imagesCockroach = [imageFirst, imageSecond, Third];
    const collectionCockroaches: CockroachCard[] = [];

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.ceil(Math.random() * 3) - 1;

        collectionCockroaches.push({
            id: uid(),
            image: imagesCockroach[randomIndex]
        })
    }
    return collectionCockroaches;
}

const GameCockroaches: FC<GameCockroachesProps> = ({ onSetPlayersStatistics }) => {
    const [cockroaches, setCockroaches] = useState<CockroachCard[]>([]);

    const [timer, setTimer] = useState<null | number>(null);

    const handleGameStarted = () => {
        setCockroaches(createCollectionCockroach());

        setTimer(Date.now());
    }

    const handleKillCockroach = (CockroachId: string | undefined) => {
        setCockroaches(prev => prev.filter((item) => (item.id !== CockroachId)));

        if (cockroaches.length - 1 === 0) {
            if (timer !== null) {
                const currentTime = Date.now();
                const elapsedTime = (currentTime - timer) / 1000;

                onSetPlayersStatistics({ userName: name(), id: uid(), time: elapsedTime });
                setTimer(null);
            }
        }
    }

    return (
        <div className={cnGameCockroaches()}>
            {cockroaches.length === 0 ?
                <StartGameButton onChangeStatusGame={handleGameStarted} /> :
                <Cockroaches collectionCockroaches={cockroaches} onKillCockroach={handleKillCockroach} />
            }
        </div>

    );
}

export { GameCockroaches };