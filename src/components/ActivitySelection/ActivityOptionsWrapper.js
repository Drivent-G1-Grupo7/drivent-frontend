import styled from 'styled-components';

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
export const ActivityOptionsBox = styled.div`
  width: 864px;
  height: 391px;
  border: 1px solid #d7d7d7;
  padding: 10px 14px 0px 9px;
  /* superior | direita | inferior | esquerda */
`;
export const ActivityOptionsContainer1 = styled.div`
  margin-right: 18px;
`;

export const ActivityOptionsContainer3 = styled.div`
  p {
    width: 37px;
    height: 11px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    color: #078632;
  }
`;

export const verticalLine = styled.div`
  width: 20px;
  height: 60px;
  margin-right: 16px;
  background: red;

  border: 10px solid #cfcfcf;
  /* transform: rotate(-90deg); */
`;

export const ActivityOptionsCard = styled.div`
  display: flex;
  width: 265px;
  height: ${(props) => props.cardSize};
  background: #f1f1f1;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 12px 13px 9px 10px;
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
