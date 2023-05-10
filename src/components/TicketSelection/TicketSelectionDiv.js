import styled from 'styled-components';

export const TicketSelectionDiv = styled.div`
  row-gap: 17px;
  margin-bottom: 44px;
  h2{
    font-family: Roboto;
    font-weight: 400;
    font-size: 20px;
    line-height: 23.44px;
    color: #8E8E8E;
    margin-bottom: 17px;
  };
  label{
    position: relative;
    input{
      appearance: none;
      cursor: pointer;
      width: 145px;
      height: 145px;
      border: 1px solid #CECECE;
      border-radius: 20px;
    };
    input:checked {
      background: #FFEED2;
      border: none;
      border-radius: 20px;
    }
    div{
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 0; 
      right: 0; 
      bottom: 58px;
      margin-left: auto; 
      margin-right: auto;
      width: auto;
      cursor: pointer;
      span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #454545;
        :last-child{
          font-size: 14px;
          line-height: 16px;
          color: #898989;
        }
      }
    }
  };
`;
