import { useState, useEffect } from 'react';
import { TicketSelectionDiv } from './TicketSelectionDiv';
import { RadioInputDiv } from './RadioInputdiv';
import { StyledButton } from './StyledButton';
import { ChosenTicketDiv } from './ChosenTicketDiv';
import CardForm from '../CreditCardComponent';

export default function TicketTypeSelection() {
  const [ticketValue, setTicketValue] = useState(0);
  const [ticketType, setTicketType] = useState('');
  const [bookingType, setBookingType] = useState('');
  const [bookingValue, setBookingValue] = useState(0);
  const [showRadioInput, setShowRadioInput] = useState(true);
  const [showBookTicketButton, setShowBookTicketButton] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  /*const onTicketTypeChange = e => {
    setValue(parseInt(e.target.value));
    switch (parseInt(e.target.value)) {
      case 100:
        setShowBookTicketButton(true);
        setType('Online');
        break;
      default:
        setShowBookTicketButton(false);
        break;
    }
  };*/

  const onTicketTypeChange = e => {
    const selectedValue = parseInt(e.target.value);
    setTicketValue(selectedValue);
  
    if (selectedValue === 100) {
      setTicketType('Online');
      setShowBookTicketButton(true);
    } else {
      setTicketType('Presencial');
    }
  };

  const onBookingChange = e => {
    const selectedValue = parseInt(e.target.value);
    setBookingValue(selectedValue);
    setShowBookTicketButton(false);
  
    if (selectedValue === 350) {
      setBookingType('Com Hotel');
      setShowBookTicketButton(true);
    } else {
      setBookingType('Sem Hotel');
      setShowBookTicketButton(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowRadioInput(false);
    setShowBookTicketButton(false);
  };

  useEffect(() => {
  }, [ticketType, ticketValue]);

  return (
    <form onSubmit={handleSubmit}>
      {showRadioInput
        ? <>
          <TicketSelectionDiv>
            <h2>Primeiro, escolha sua modalidade de ingresso</h2>
            <RadioInputDiv>
              <label htmlFor="presencial">
                <input type="radio" id="presencial" name="ingresso" value="250" onChange={onTicketTypeChange} />
                <div>
                  <span>Presencial</span>
                  <span>R$ 250</span>
                </div>
              </label>
              <label htmlFor="online">
                <input type="radio" id="online" name="ingresso" value="100" onChange={onTicketTypeChange} />
                <div>
                  <span>Online</span>
                  <span>R$ 100</span>
                </div>
              </label>
            </RadioInputDiv>
          </TicketSelectionDiv>
          {ticketType === 'Presencial' && (
            <TicketSelectionDiv>
              <h2>Primeiro, escolha sua modalidade de ingresso</h2>
              <RadioInputDiv>
                <label htmlFor="Sem hotel">
                  <input type="radio" id="sem-hotel" name="hotel" value="0" onChange={onBookingChange} />
                  <div>
                    <span>Sem Hotel</span>
                    <span>+ R$ 0</span>
                  </div>
                </label>
                <label htmlFor="Com Hotel">
                  <input type="radio" id="com-hotel" name="hotel" value="350" onChange={onBookingChange} />
                  <div>
                    <span>Com Hotel</span>
                    <span>+ R$ 350</span>
                  </div>
                </label>
              </RadioInputDiv>
            </TicketSelectionDiv>
          )} </>
        : <TicketSelectionDiv>
          <h2>Ingresso escolhido</h2>
          <ChosenTicketDiv>
            <span>{ticketType} {bookingType} </span>
            <span>R$ {ticketValue + bookingValue}</span>
          </ChosenTicketDiv>
          {paymentConfirmed === false ? (<CardForm setPaymentConfirmed={setPaymentConfirmed} />) : (<h2>Pagamento confirmado!</h2>)} 
        </TicketSelectionDiv>
      }
      {showBookTicketButton
        ? <TicketSelectionDiv>
          <h2>Fechado! O total ficou em <b>R$ {ticketValue + bookingValue}.</b> Agora é só confirmar:</h2>
          <StyledButton type="submit">RESERVAR INGRESSO</StyledButton>
        </TicketSelectionDiv>
        : <></>
      }
    </form>
  );
};
