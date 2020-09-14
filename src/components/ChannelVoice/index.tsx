import React from 'react';

import { Container, VozChat, NunberVoice, InviteIcon, } from './styles';

export interface Props {
    channelVoice: String;
    selected?: boolean;
}

const ChannelVoice: React.FC<Props> = ({ channelVoice, selected}) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
            <VozChat />
                <span>{channelVoice}</span>
        
            </div>


            <div>   
                <NunberVoice>
                    <span>00 05</span>
                    <InviteIcon /> 
                    </NunberVoice>
                </div>


        </Container>
    );    
};


export default ChannelVoice;