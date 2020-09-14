import React from 'react';

import imgIcon from '../../assets/image/disc.png';
import imgIcon2 from '../../assets/image/mudae.jpg';
import imgIcon3 from '../../assets/image/anime.jpg';

import { Container, Avatar, Message, Header, Content } from './styles';
export { Mention } from './styles';


export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  admOn?: boolean;
  menbroComun?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
  admOn,
  menbroComun,
}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''} />
      {admOn && <img src={imgIcon3} alt="img" />}
      {isBot && <img src={imgIcon2} alt="img" />}
      {menbroComun && <img src={ imgIcon } alt="img"/> }
      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;
