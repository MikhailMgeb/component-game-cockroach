import React, { FC } from 'react';

import { cnStartGameButton } from './StartGameButton.classname';

import './StartGameButton.css';

type StartGameButtonProps = {
    onChangeStatusGame: () => void;
    startGame: () => void;
    isOpened: boolean;
}

const StartGameButton: FC<StartGameButtonProps> = ({ onChangeStatusGame, startGame, isOpened }) => {
    const handleStatusGame = () => {
        onChangeStatusGame();
        startGame();
    }

    return (
        <>
            {isOpened || <button className={cnStartGameButton('input', { style: true })}
                onClick={handleStatusGame}>Начать игру</button>}
        </>
    );
}

export { StartGameButton };