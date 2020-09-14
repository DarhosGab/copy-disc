import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: transparent;

  &.mention {
    background-color: var(--mention-message);

    margin-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }

  & + div {
    margin-top: 13px;
  }

  > img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
`;

export const Avatar = styled.div``;

export const Message = styled.span`
  min-height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 17px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: #fff;
    font-size: 16px;
  }

  > span {
    margin-left: 6px;

    background-color: var(--discord);
    color: #fff;
    border-radius: 4px;

    padding: 4px 5px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }

  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: #fff;
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;

  &:hover {
  }
`;
