import styled from "styled-components";
import { VolumeUp } from 'styled-icons/material';
import { PersonAdd } from 'styled-icons/material';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;
  background: transparent;

  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  };

  > div span {
    margin-left: 5px;
    color: var(--senary);

  };


  &:hover, &.active {
    background-color: var(--quinary);

    > div > span {
      color: #fff;      
    };
  };
`;

export const VozChat = styled(VolumeUp)`
  width: 20px;
  height: 20px;

  color: var(--symbol); 
`;


export const NunberVoice = styled.div`
    width: 38px;
    height: 17px;

    display:flex;
    align-items: center;

    > span {
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    };

    background: linear-gradient( to right, #656666 49%, #202225 52%);
    border-radius: 12rem;
`;


export const InviteIcon = styled(PersonAdd)`
    width: 16px;
     width: 16px;

    display:none;

    margin-right: 4px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

`;
