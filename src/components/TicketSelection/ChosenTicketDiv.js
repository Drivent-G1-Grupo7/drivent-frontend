import styled from 'styled-components';

export const ChosenTicketDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 7px;
    width: 290px;
    height: 108px;
    background: #FFEED2;
    border-radius: 20px;
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
`;
