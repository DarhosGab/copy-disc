import React from 'react';
import imgIcon from '../../assets/image/anime.jpg';

import { 
    Container, 
    Profile, 
    Avatar, 
    UserData, 
    Icons, 
    MicIcon, 
    HeadphoneIcon, 
    SettingIcon 
} from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar>
                    <img src={imgIcon} alt='Seila porra' />
                    </Avatar> 
                <UserData> 
                    <strong>Perfect</strong>
                    <span>#8445</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingIcon />
            </Icons>
        </Container>
    );    
};


export default UserInfo;