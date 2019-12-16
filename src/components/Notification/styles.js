import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;
export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        height: 10px;
        width: 10px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 20px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
    padding: 0 6px;
    margin: 0 6px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        height: 8px;
        width: 8px;
        background: #ff892e;
        border-radius: 50%;
      }
    `}
`;
