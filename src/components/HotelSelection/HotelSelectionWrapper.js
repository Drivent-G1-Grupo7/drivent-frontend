import styled from 'styled-components';

export const HotelSelectionWrapper = styled.div`
  row-gap: 17px;
  margin-bottom: 44px;
  h2 {
    font-family: Roboto;
    font-weight: 400;
    font-size: 20px;
    line-height: 23.44px;
    color: #8e8e8e;
    margin-bottom: 17px;
  }
  label {
    display: flex;
    gap: 19px;
  }
`;

export const StyledHotelWrapper = styled.div`
  appearance: none;
  cursor: pointer;
  width: 196px;
  height: 264px;
  border: none;
  border-radius: 10px;
  background: #ebebeb;
  padding: 16px 14px 0px 14px;
  /* superior | direita | inferior | esquerda */
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
    margin-bottom: 10px;
  }
  div {
    margin-bottom: 14px;
    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #3c3c3c;
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #3c3c3c;
    }
    StyledHotelWrapper:checked {
      background: #FFEED2;
    }

  }
`;
