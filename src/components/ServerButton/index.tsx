import React from 'react';

import Disc from '../../assets/image/discord.svg';

import { Button } from './styles';

export interface Props {
    select?: Boolean;
    isHome?: Boolean;
    hasNotifications?: Boolean;
    mentions?: number;
    selecionado?: boolean;
}

const ServerButton: React.FC<Props> = ({
    select,
    isHome,
    hasNotifications,
    mentions,
    selecionado,
}) => {
    return (
        <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={select ? 'active' : ''}
        id={selecionado ? 'select' : '' }
        >
            {isHome && <img src={Disc} alt=""/>}

        </Button>
    )
};


export default ServerButton;