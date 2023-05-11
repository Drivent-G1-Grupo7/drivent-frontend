import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import HotelSelection from '../../../components/HotelSelection';

export default function Hotel() {
  const [hasOnlineTicketType, setHasOnlineTicketType] = useState(true);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {hasOnlineTicketType ? (
        <HotelSelection />
      ) : (
        <NoBookingText>
          Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades
        </NoBookingText>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;

const NoBookingText = styled.p`
  margin: auto;
  margin-top: 25%;
  width: 464px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
`;