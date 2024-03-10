import React from 'react';
import type { MouseEvent } from 'react';

import { cnCockroach } from './Cockroach.classname';
import imageFirst from '../assets/cockroach-type-1.png';
import imageSecond from '../assets/cockroach-type-2.png';
import Third from '../assets/cockroach-type-3.png';

import './Cockroach.css';

const imagesCockroach = [imageFirst, imageSecond, Third];
const collectionPictures: string[] = [];
let randomIndex;

for (let i = 0; i < 8; i++) {
    randomIndex = Math.ceil(Math.random() * 3) - 1;
    collectionPictures.push(imagesCockroach[randomIndex]);
}

function randomPosition(axis: string) {
    const screenWidth = window.screen.width - 100;
    const screenHeight = window.screen.height - 220;

    const randomNumber = Math.floor(Math.random() * (axis === 'top' ? screenHeight : screenWidth));
    return randomNumber;
}

const Cockroach = () => {
    const handleKillCockroach = (event: MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        console.log(target.dataset.id)
    }
    return (
        <div className={cnCockroach()} onClick={handleKillCockroach}>
            {collectionPictures.map((item, index) =>
                <img src={item} className={cnCockroach('Image')}
                    style={
                        {
                            position: 'absolute',
                            top: randomPosition('top'),
                            left: randomPosition('left'),
                            transform: `rotate(${Math.random() * 359}deg)`,
                        }
                    }
                    alt='cockroach' key={index} data-id={index} />)}
        </div>
    );
}

export { Cockroach };
