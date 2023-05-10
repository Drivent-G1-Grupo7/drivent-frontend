import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import useEnrollment from '../../../hooks/api/useEnrollment';
import styled from 'styled-components';
import TicketTypeSelection from '../../../components/TicketSelection';

export default function Payment() {
  const [hasEnrollment, setHasEnrollment] = useState(false);
  const { getEnrollment } = useEnrollment();
  useEffect(() => {  
    const fetchData = async() => {
      const data = await getEnrollment();
      if (data.id) setHasEnrollment(true);
    };
    fetchData().catch();
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {hasEnrollment 
        ? <TicketTypeSelection/> 
        : <NoEnrollmentText>
            Você precisa completar sua inscrição antes 
            de prosseguir pra escolha de ingresso
        </NoEnrollmentText>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px!important;
`;

const NoEnrollmentText = styled.p`
  margin: auto;
  margin-top: 25%;
  width: 440px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8E8E8E;
`;
