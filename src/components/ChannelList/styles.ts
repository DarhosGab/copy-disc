import styled from "styled-components";
import {Add} from 'styled-icons/material'
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div `
    grid-area: CL;

    display: flex;
    flex-direction: column;

    padding: 24px 9.5px 0 16px;
    background-color: var(--secondary);
 
    overflow-y: scroll;

    ::-webkit-scrollbar{
    width: 6px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track{
    background-color: var(--secondary);
  }


`;

export const ExpandIcon = styled(ExpandMore)`
    width: 15px;
    height: 15px;

    color: #fff;
    cursor: pointer;    
`;

export const Category = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
  


    margin-bottom: 4px;
    margin-top: 13px;


    >  div {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        opacity: 0.3;
        color: #fff;

    };

    > div:hover {
        opacity: 0.8;
        transition: opacity .2s;
    };

`;



export const AddCategoryIcon = styled(Add) `
    width: 21px;
    height: 21px;


    color: #fff;
    cursor: pointer;

    opacity: .3;

    &:hover{
        opacity: 1;
    };

    transition: opacity .2s;
    
`;