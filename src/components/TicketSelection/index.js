import { useState, useEffect } from 'react';
import { TicketSelectionDiv } from './TicketSelectionDiv';
import { RadioInputDiv } from './RadioInputdiv';
import { StyledButton } from './StyledButton';
import { ChosenTicketDiv } from './ChosenTicketDiv';
import CardForm from '../CreditCardComponent';
import useTicket from '../../hooks/api/useTicket';
import useTicketType from '../../hooks/api/useTicketType';
import useTicketCreation from '../../hooks/api/useTicketCreation';
import useGetPayment from '../../hooks/api/useGetPayment';

export default function TicketTypeSelection() {
  const [ticketData, setTicketData] = useState('');
  const [bookedTicket, setBookedTicket] = useState('');
  const [presential, setPresential] = useState(false);
  const [showBookTicketButton, setShowBookTicketButton] = useState(false);
  const [wasTicketChosen, setWasTicketChosen] = useState(false);
  const { getTicket } = useTicket();
  const { getTicketTypes } = useTicketType();
  const { createTicket } = useTicketCreation();
  const { getPayment } = useGetPayment();
  const [unpaidTicket, setUnpaidTicket] = useState(true);
  const [userTicketId, setUserTicketId] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      let userTicket = false;
      try {
        const typesData = await getTicketTypes();
        if (typesData !== null) setTicketData(typesData);
        userTicket = await getTicket();
        if (userTicket) {
          setBookedTicket(userTicket.ticketTypeId - 1);
          setUserTicketId(userTicket.id);
          const userPayment = await getPayment(userTicket.id);
          if (userPayment) setUnpaidTicket(false);
          setWasTicketChosen(true);
        }
      } catch (error) {
        if (userTicket) setWasTicketChosen(true);
      }
    };
    fetchData();
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
      const newTicket = await createTicket({ ticketTypeId: ticketData[bookedTicket].id });
      setUserTicketId(newTicket.id);
      setShowBookTicketButton(false);
      setWasTicketChosen(true);
    } catch (error) {
      alert(error);
      setShowBookTicketButton(false);
      setPresential(false);
      setBookedTicket(0);
    }
  };

  return (
    <>
      {wasTicketChosen ?
        <>
          <TicketSelectionDiv>
            <h2>Ingresso escolhido</h2>
            <ChosenTicketDiv>
              <span>{ticketData[bookedTicket].name} </span>
              <span>R$ {ticketData[bookedTicket].price}</span>
            </ChosenTicketDiv>
          </TicketSelectionDiv>
          <CardForm unpaidTicket={unpaidTicket} ticketId={userTicketId}/>
        </>
        :
        <form onSubmit={handleSubmit}>
          <>
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
          {showBookTicketButton && (
            <TicketSelectionDiv>
              <h2>Fechado! O total ficou em <b>R$ {ticketData[bookedTicket].price}.</b> Agora é só confirmar:</h2>
              <StyledButton type="submit">RESERVAR INGRESSO</StyledButton>
            </TicketSelectionDiv>
          )
          }
        </form>
      }
    </>
  );
};
