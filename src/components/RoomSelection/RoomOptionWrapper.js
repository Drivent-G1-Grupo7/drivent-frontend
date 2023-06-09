import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const RoomOptionWrapper = styled.button`
  margin-right: 15px;
  background: ${(props) => props.color};
  display: flex;
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  :disabled {
    cursor: not-allowed;
    background: #e9e9e9;
    label {
      color: #9D9D9D;
    }
  }

  label {
    width: 35px;
    height: 23px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #454545;
    margin: 11px 50px 11px 13px;
  }
`;
export const CapacityDisplayWrapper = styled.div`
  position: absolute;
  right: 10px;
`;
export const IconBox = styled.div`
  border: none !important;
`;
export const StyledIcon = styled(Icon)`
  width: 27px;
  height: 27px;
  margin: 9px 0 9px 0px;

  
`;
