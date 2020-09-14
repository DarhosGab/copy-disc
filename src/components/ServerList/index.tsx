import React from 'react';

import ServerButton from '../ServerButton';

import { Container,Separator } from './styles';

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton selecionado />
            <ServerButton hasNotifications/>
            <ServerButton hasNotifications mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={234}/>
            <ServerButton />
            <ServerButton />
        </Container>
    )
}


export default ServerList;