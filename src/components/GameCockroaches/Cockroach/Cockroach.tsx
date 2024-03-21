import React from 'react';
import type { FC } from 'react';

import { cnGameCockroaches } from '../GameCockroaches.classname';
import { CockroachCard } from '../GameTyped';

import './Cockroach.css';

type CockroachProps = {
    collectionCockroaches: CockroachCard[];
    onKillCockroach: (CockroachId: string | undefined) => void;
}

function randomPosition(axis: string) {
    const screenWidth = window.screen.width - 100;
    const screenHeight = window.screen.height - 220;

    const randomNumber = Math.floor(Math.random() * (axis === 'top' ? screenHeight : screenWidth));
    return randomNumber;
}

const Cockroaches: FC<CockroachProps> = ({ collectionCockroaches, onKillCockroach }) => {

    const handleKillCockroach = (id: string) => {

        collectionCockroaches.filter(item => item.id !== id);

        onKillCockroach(id);
    }

    return (
        <div className={cnGameCockroaches('Cockroach')}>
            {collectionCockroaches.map((item) =>
                <img src={item.image} className={cnGameCockroaches('Image')}
                    style={
                        {
                            position: 'absolute',
                            top: randomPosition('top'),
                            left: randomPosition('left'),
                            transform: `rotate(${Math.random() * 359}deg)`,
                        }
                    }
                    alt='cockroach' key={item.id} onClick={() => { handleKillCockroach(item.id) }} />)}
        </div>
    );
}

export { Cockroaches };
