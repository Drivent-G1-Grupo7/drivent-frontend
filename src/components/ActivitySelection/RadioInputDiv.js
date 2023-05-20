import styled from 'styled-components';

export const RadioInputDiv = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 17px;
    label {
        position: relative;
        input {
            appearance: none;
            cursor: pointer;
            height: 37px;
            width: 131px;
            background: #E0E0E0;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
            border: none;
            border-radius: 4px;
        }
        input:checked {
            background: #FFD37D;
        }
        span {
            position: absolute;
            left: 0; 
            right: 0;
            top: 33%;
            cursor: pointer;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: #000000;
        }
    }
`;
