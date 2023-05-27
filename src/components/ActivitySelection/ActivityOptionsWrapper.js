import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const ActivityOptionsWrapper = styled.div`
  width: 864px;
  height: 100%;
  margin-top: 30px;
`;

export const ActivityOptionsTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AtctivityOptionsTitle = styled.h2`
  width: 100%;
  height: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 20px;
  color: #7b7b7b;
`;

export const ActivityOptionsContentWrapper = styled.div`
  display: flex;
  width: 864px;
  height: 391px;
  border: 1px solid #d7d7d7;
`;
export const MainRoomActivitiesContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  border-right: 1px solid #d7d7d7;
  overflow-y: auto;


`;
export const SideRoomActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d7d7d7;
  overflow-y: auto;

`;
export const WorkshopRoomActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d7d7d7;
  overflow-y: auto;
`;
export const ActivityOptionsBox = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* width: 864px; */
  height: auto;
  /* border-right: 1px solid #d7d7d7; */
  padding: 10px 14px 0px 9px;
  /* superior | direita | inferior | esquerda */
`;

export const ActivityOptionsCard = styled.div`
  display: flex;
  width: 265px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  height: ${(props) => props.cardSize};
  background: ${(props) => (props.isSubscribed ? '#d0ffdb' : '#f1f1f1')};
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 12px 10px 12px 10px;
  /* superior | direita | inferior | esquerda */
  :disabled {
    cursor: not-allowed;
  }
`;

export const ActivityOptionsContainer1 = styled.div`
  width: 189px;
`;

export const ActivityOptionsContainer2 = styled.div`
  display: flex;
  flex-direction: column;

  width: 56px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: ${(props) => (props.isSubscribed ? ' 1px solid #99E8A1' : ' 1px solid #d7d7d7')};
`;

export const EnterEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  p {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 11px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    color: ${(props) => (props.totalSpots === 0 ? '#cc6666' : '#078632')};
    margin-left: 5px;
  }
`;

export const StyledIcon = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  margin-left: 5px;
`;

export const ActivityOptionsCardTitle = styled.h3`
  /* width: 171px; */
  /* height: 14px; */

  font-family: 'Roboto' !important;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #343434;
  margin-bottom: 6px;
`;

export const ActivityDateWrapper = styled.div`
  display: flex;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
  }
`;
