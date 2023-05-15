import { useState, useEffect } from 'react';
import { TicketSelectionDiv } from './TicketSelectionDiv';
import { RadioInputDiv } from './RadioInputdiv';
import { StyledButton } from './StyledButton';
import { ChosenTicketDiv } from './ChosenTicketDiv';
import CardForm from '../CreditCardComponent';
import useTicketType from '../../hooks/api/useTicketType';
import useTicketCreation from '../../hooks/api/useTicketCreation';

export default function TicketTypeSelection() {
  const [ticketData, setTicketData] = useState('');
  const [bookedTicket, setBookedTicket] = useState(0);
  const [presential, setPresential] = useState(false);
  const [showRadioInput, setShowRadioInput] = useState(true);
  const [showBookTicketButton, setShowBookTicketButton] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const { getTicketTypes } = useTicketType();
  const { createTicket } = useTicketCreation();
  
  useEffect(() => {  
    const fetchData = async() => {
      const data = await getTicketTypes();
      if (data !== null) setTicketData(data);
    };
    fetchData().catch();
  }, []);

  const onTicketTypeChange = e => {
    setBookedTicket(parseInt(e.target.value));
    switch (parseInt(e.target.value)) {
    case 0:
      setPresential(false);
      setShowBookTicketButton(true);
      break;
    case 1:
      setShowBookTicketButton(false);
      setPresential(true);
      break;
    case 2:
      setShowBookTicketButton(true);
      break;
    case 9:
      setBookedTicket(1);
      setShowBookTicketButton(true);
      break;
    default:
      setShowBookTicketButton(false);
      setPresential(false);
      setBookedTicket(0);
      break;
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      await createTicket({ ticketTypeId: ticketData[bookedTicket].id });
      setShowRadioInput(false);
      setShowBookTicketButton(false);
    } catch (error) {
      alert(error);
      setShowBookTicketButton(false);
      setPresential(false);
      setBookedTicket(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {showRadioInput
        ? <>
          <TicketSelectionDiv>
            <h2>Primeiro, escolha sua modalidade de ingresso</h2>
            <RadioInputDiv>
              <label htmlFor="presencial">
                <input type="radio" id="presencial" name="ingresso" value="1" onChange={onTicketTypeChange} />
                <div>
                  <span>Presencial</span>
                  <span>R$ 250</span>
                </div>
              </label>
              <label htmlFor="online">
                <input type="radio" id="online" name="ingresso" value="0" onChange={onTicketTypeChange} />
                <div>
                  <span>Online</span>
                  <span>R$ 100</span>
                </div>
              </label>
            </RadioInputDiv>
          </TicketSelectionDiv>
          {presential &&
            <TicketSelectionDiv>
              <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
              <RadioInputDiv>
                <label htmlFor="sem-hotel">
                  <input type="radio" id="sem-hotel" name="hotel" value="9" onChange={onTicketTypeChange} />
                  <div>
                    <span>Sem Hotel</span>
                    <span>+ R$ 0</span>
                  </div>
                </label>
                <label htmlFor="com-hotel">
                  <input type="radio" id="com-hotel" name="hotel" value="2" onChange={onTicketTypeChange} />
                  <div>
                    <span>Com Hotel</span>
                    <span>+ R$ 350</span>
                  </div>
                </label>
              </RadioInputDiv>
            </TicketSelectionDiv>
          } </>
        : <TicketSelectionDiv>
          <h2>Ingresso escolhido</h2>
          <ChosenTicketDiv>
            <span>{ticketData[bookedTicket].name} </span>
            <span>R$ {ticketData[bookedTicket].price}</span>
          </ChosenTicketDiv>
          {paymentConfirmed === false ? (<CardForm setPaymentConfirmed={setPaymentConfirmed} />) : (<h2>Pagamento confirmado!</h2>)} 
        </TicketSelectionDiv>
      }
      {showBookTicketButton
        ? <TicketSelectionDiv>
          <h2>Fechado! O total ficou em <b>R$ {ticketData[bookedTicket].price}.</b> Agora é só confirmar:</h2>
          <StyledButton type="submit">RESERVAR INGRESSO</StyledButton>
        </TicketSelectionDiv>
        : <></>
      }
    </form>
  );
};
