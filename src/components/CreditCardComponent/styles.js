import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    margin-bottom: 14px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 20px;
    line-height: 23.44px;
    color: #8E8E8E;
    b{
      font-weight: 700;
    }
  }
`;

export const CardFormContainer = styled.div`
  display: flex;

  form {
    margin-left: 30px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    width: 600px;
    max-height: 320px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8E8E8E;


    span {
      margin-bottom: 10px;
      margin-top: -15px;
      font-size: 14px;
      }

    input {
      width: auto;
      height: 40px;
      margin-bottom: 15px;
      border-radius: 5px;
      border: 1px solid #8E8E8E;
      box-sizing: border-box;
      padding-left: 10px;
      font-family: 'Roboto' !important;
      font-size: 20px !important;
      color: #8E8E8E !important;
      &::placeholder{
        color: #8E8E8E;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
      }
      &:focus{
        outline: none;
        border: 1px solid #000000;
      }
    }

    div {
      display: flex;

      input{
        width: 190px;
        margin-right: 10px;
      }
    }
  }
`;
