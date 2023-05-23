import styled from 'styled-components';

export default function ActivityOptions() {
  return (
    <ActivityOptionsWrapper>
      <ActivityOptionsTitleWrapper>
        <AtctivityOptionsTitle>Auditório Principal</AtctivityOptionsTitle>
        <AtctivityOptionsTitle>Auditório Lateral</AtctivityOptionsTitle>
        <AtctivityOptionsTitle>Sala de Workshop</AtctivityOptionsTitle>
      </ActivityOptionsTitleWrapper>
      <ActivityOptionsContentWrapper>
        <ActivityOptionsBox>
          <ActivityOptionsCard1></ActivityOptionsCard1>
          <ActivityOptionsCard1></ActivityOptionsCard1>
        </ActivityOptionsBox>
        <ActivityOptionsBox>
          <ActivityOptionsCard2></ActivityOptionsCard2>
        </ActivityOptionsBox>
        <ActivityOptionsBox>
          <ActivityOptionsCard1></ActivityOptionsCard1>
          <ActivityOptionsCard1></ActivityOptionsCard1>
        </ActivityOptionsBox>
      </ActivityOptionsContentWrapper>
    </ActivityOptionsWrapper>
  );
}

const ActivityOptionsWrapper = styled.div`
  width: 864px;
  height: 100%;
  margin-top: 30px;
`;

const ActivityOptionsTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AtctivityOptionsTitle = styled.h2`
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

const ActivityOptionsContentWrapper = styled.div`
  display: flex;
  width: 864px;
  height: 391px;
  border: 1px solid #d7d7d7;
`;
const ActivityOptionsBox = styled.div`
  width: 864px;
  height: 391px;
  border: 1px solid #d7d7d7;
  padding: 10px 14px 0px 9px;
  /* superior | direita | inferior | esquerda */
`;

const ActivityOptionsCard1 = styled.div`
  width: 265px;
  height: 79px;
  background: #f1f1f1;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ActivityOptionsCard2 = styled.div`
  width: 265px;
  height: 168px;
  background: #f1f1f1;
  border-radius: 5px;
`;

const ActivityOptionsCardTitle = styled.h3``;

const ActivityOptionsCardDescription = styled.p``;
