import React from 'react';

import imgIcon from '../../assets/image/disc.png';
import imgIcon2 from '../../assets/image/mudae.jpg';
import imgIcon3 from '../../assets/image/anime.jpg';

import { Container, Role, User, Avatar  } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  admOn?: boolean;
  menbroComun?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, admOn, menbroComun }) => {
  return (
    <User>

      <Avatar className={isBot ? 'bot' : '' } >

      {admOn && <img src={ imgIcon3 } alt="img"/>}
      {isBot && <img src={ imgIcon2 } alt="img"/>}
      {menbroComun && <img src={ imgIcon } alt="img"/> }
      </Avatar>
      
      
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span> }
      {admOn && <h1>Adm</h1>}

    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel 1</Role>
      <UserRow nickname="Perfect" admOn/>

      <Role>Offline - 16</Role>

      <UserRow nickname="MudaeMaid" isBot />

      <UserRow nickname="FernandoTec" menbroComun/>

      <UserRow nickname="Pedro4Dev" menbroComun/>

      <UserRow nickname="SkykspeXYZ" menbroComun/>

      <UserRow nickname="Dedezinnn GuruGuru" menbroComun/>

      <UserRow nickname="DRK_" menbroComun/>

      <UserRow nickname="Neox?" menbroComun/>

      <UserRow nickname="Loritta" isBot />

      <UserRow nickname="Fellzera" menbroComun/>

      <UserRow nickname="Tobi" menbroComun/>

      <UserRow nickname="Galaxy213" menbroComun/>

      <UserRow nickname="Salgado" menbroComun/>

      <UserRow nickname="Thuzin" menbroComun/>

      <UserRow nickname="Capacho" menbroComun/>

      <UserRow nickname="Erza" menbroComun/>

      <UserRow nickname="Pedro" menbroComun/>

    </Container>
  );
};

export default UserList;
