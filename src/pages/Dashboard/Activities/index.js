import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import ActivitySelection from '../../../components/ActivitySelection';
import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket';
import useTicketType from '../../../hooks/api/useTicketType';

export default function Activities() {
  const [isPresential, setIsPresential] = useState(true);
  const [hasPayed, setHasPayed] = useState(true);
  const { getTicket } = useTicket();
  const { getTicketTypes } = useTicketType();

  useEffect(() => {  
    const fetchData = async() => {
      const data = await getTicket();
      if (data.status === 'PAID') {
        setHasPayed(true);
        const types = await getTicketTypes();
        const datatype = types.find((type) => {
          return type.id === data.ticketTypeId;
        });
        if (datatype.isRemote === false) setIsPresential(true);
      };
    };
    fetchData().catch();
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      {hasPayed ? isPresential ? (
        <ActivitySelection />
      ) : (
        <InvalidTicketText>
          Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
        </InvalidTicketText>
      ): (
        <InvalidTicketText>
          Você precisa ter confirmado pagamento antes de fazer a escolha de atividades
        </InvalidTicketText>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;

const InvalidTicketText = styled.p`
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
