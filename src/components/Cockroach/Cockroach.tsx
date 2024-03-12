import React from 'react';
import type { FC, MouseEvent } from 'react';

import { cnCockroach } from './Cockroach.classname';

import './Cockroach.css';

type CockroachCard = {
    id: string;
    image: string
}

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

const Cockroach: FC<CockroachProps> = ({ collectionCockroaches, onKillCockroach }) => {

    const handleKillCockroach = (event: MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;

        collectionCockroaches.filter(item => item.id !== target.dataset.id);

        onKillCockroach(target.dataset.id);
    }

    return (
        <div className={cnCockroach()} onClick={handleKillCockroach}>
            {collectionCockroaches.map((item, index) =>
                <img src={item.image} className={cnCockroach('Image')}
                    style={
                        {
                            position: 'absolute',
                            top: randomPosition('top'),
                            left: randomPosition('left'),
                            transform: `rotate(${Math.random() * 359}deg)`,
                        }
                    }
                    alt='cockroach' key={index} data-id={item.id} />)}
        </div>
    );
}

export { Cockroach };
export type { CockroachCard };
