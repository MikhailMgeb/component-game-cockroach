import React, { FC } from 'react';

import { cnGameCockroaches } from '../GameCockroaches.classname';

import './StartGameButton.css';

type StartGameButtonProps = {
    onChangeStatusGame: () => void;
}

const StartGameButton: FC<StartGameButtonProps> = ({ onChangeStatusGame }) => {
    const handleStatusGame = () => {
        onChangeStatusGame();
    }

    return (
        <button className={cnGameCockroaches('Input')} onClick={handleStatusGame}>
            Начать игру
        </button>
    );
}

export { StartGameButton };