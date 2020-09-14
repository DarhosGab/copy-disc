import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop =  div.scrollHeight;
        }
    }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Perfect"
          date="21/06/2020"
          content="$wa"
          admOn
        />
        <ChannelMessage
          author="MudaeMaid"
          date="21/06/2020"
          content={
            <>
              <Mention>@Perfect</Mention> os rolls são limitado a 19 usos por
              hora. 2 min restante(s). Você pode esperar ou dar Upvote na Mudae
              para resetar o tempo: $vote Entre no server BR da Mudae
              https://cutt.ly/zrPKIjN. Twitter: @​Mudaebot
            </>
          }
          hasMention
          isBot
        />
        <ChannelMessage
          author="Perfect"
          date="21/06/2020"
          content="$wa"
          admOn
        />
        <ChannelMessage
          author="MudaeMaid"
          date="21/06/2020"
          content={
            <>
              <Mention>@Perfect</Mention> os rolls são limitado a 19 usos por
              hora. 2 min restante(s). Você pode esperar ou dar Upvote na Mudae
              para resetar o tempo: $vote Entre no server BR da Mudae
              https://cutt.ly/zrPKIjN. Twitter: @​Mudaebot
            </>
          }
          hasMention
          isBot
        />
        <ChannelMessage
          author="Perfect"
          date="21/06/2020"
          content="$wa"
          admOn
        />
        <ChannelMessage
          author="MudaeMaid"
          date="21/06/2020"
          content={
            <>
              <Mention>@Perfect</Mention> os rolls são limitado a 19 usos por
              hora. 2 min restante(s). Você pode esperar ou dar Upvote na Mudae
              para resetar o tempo: $vote Entre no server BR da Mudae
              https://cutt.ly/zrPKIjN. Twitter: @​Mudaebot
            </>
          }
          hasMention
          isBot
        />
        <ChannelMessage
          author="Perfect"
          date="21/06/2020"
          content="$wa"
          admOn
        />
        <ChannelMessage
          author="MudaeMaid"
          date="21/06/2020"
          content={
            <>
              <Mention>@Perfect</Mention> os rolls são limitado a 19 usos por
              hora. 2 min restante(s). Você pode esperar ou dar Upvote na Mudae
              para resetar o tempo: $vote Entre no server BR da Mudae
              https://cutt.ly/zrPKIjN. Twitter: @​Mudaebot
            </>
          }
          hasMention
          isBot
        />
        <ChannelMessage
          author="Perfect"
          date="21/06/2020"
          content="$wa"
          admOn
        />
        <ChannelMessage
          author="MudaeMaid"
          date="21/06/2020"
          content={
            <>
              <Mention>@Perfect</Mention> os rolls são limitado a 19 usos por
              hora. 2 min restante(s). Você pode esperar ou dar Upvote na Mudae
              para resetar o tempo: $vote Entre no server BR da Mudae
              https://cutt.ly/zrPKIjN. Twitter: @​Mudaebot
            </>
          }
          hasMention
          isBot
        />
        <ChannelMessage
          author="Perfect"
          date="21/06/2020"
          content="$wa"
          admOn
        />
        <ChannelMessage
          author="MudaeMaid"
          date="21/06/2020"
          content={
            <>
              <Mention>@Perfect</Mention> os rolls são limitado a 19 usos por
              hora. 2 min restante(s). Você pode esperar ou dar Upvote na Mudae
              para resetar o tempo: $vote Entre no server BR da Mudae
              https://cutt.ly/zrPKIjN. Twitter: @​Mudaebot
            </>
          }
          hasMention
          isBot
        />
        <ChannelMessage
          author="Perfect"
          date="21/06/2020"
          content="$wa"
          admOn
        />
        <ChannelMessage
          author="MudaeMaid"
          date="21/06/2020"
          content={
            <>
              <Mention>@Perfect</Mention> os rolls são limitado a 19 usos por
              hora. 2 min restante(s). Você pode esperar ou dar Upvote na Mudae
              para resetar o tempo: $vote Entre no server BR da Mudae
              https://cutt.ly/zrPKIjN. Twitter: @​Mudaebot
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />

        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
