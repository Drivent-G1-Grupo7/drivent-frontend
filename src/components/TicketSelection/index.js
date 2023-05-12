import { useState } from 'react';
import { TicketSelectionDiv } from './TicketSelectionDiv';
import { RadioInputDiv } from './RadioInputdiv';
import { StyledButton } from './StyledButton';
import { ChosenTicketDiv } from './ChosenTicketDiv';

export default function TicketTypeSelection() {
  const [ticketValue, setTicketValue] = useState(0);
  const [ticketType, setTicketType] = useState('');
  //const [bookingType, setBookingType] = useState('');
  //const [bookingValue, setBookingValue] = useState(0);
  const [showRadioInput, setShowRadioInput] = useState(true);
  const [showBookTicketButton, setShowBookTicketButton] = useState(false);

  const onTicketTypeChange = e => {
    setTicketValue(parseInt(e.target.value));
    switch (e.target.value) {
    case '100':
      setShowBookTicketButton(true);
      setTicketType('Online');
      break;
    case '250':
      setShowBookTicketButton(false);
      setTicketType('Presencial');
      break;
    case '600':
      setShowBookTicketButton(true);
      setTicketType('Presencial + Com Hotel');
      break;
    case '0':
      setTicketValue(250);
      setShowBookTicketButton(true);
      setTicketType('Presencial + Sem Hotel');
      break;
    default:
      setShowBookTicketButton(false);
      setTicketType('');
      break;
    }
  };

  /*const onTicketTypeChange = e => {
    setTicketValue(parseInt(e.target.value));

    if (e.target.value === '250') {
      setShowBookTicketButton(false);
      setTicketType('Presencial');
    } else {
      setTicketType('Online');
      setShowBookTicketButton(true);
    }
  };

  const onBookingChange = e => {
    setBookingValue(parseInt(e.target.value));

    if (e.target.value === '350') {
      setBookingType('Com Hotel');
      setShowBookTicketButton(true);
    } else {
      setBookingType('Sem Hotel');
      setShowBookTicketButton(true);
    }
  };*/

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowRadioInput(false);
    setShowBookTicketButton(false);
  };

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
          {ticketType !== '' && ticketType !== 'Online' &&
            <TicketSelectionDiv>
              <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
              <RadioInputDiv>
                <label htmlFor="sem-hotel">
                  <input type="radio" id="sem-hotel" name="hotel" value="0" onChange={onTicketTypeChange} />
                  <div>
                    <span>Sem Hotel</span>
                    <span>+ R$ 0</span>
                  </div>
                </label>
                <label htmlFor="com-hotel">
                  <input type="radio" id="com-hotel" name="hotel" value="600" onChange={onTicketTypeChange} />
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
            <span>{ticketType}</span>
            <span>R$ {ticketValue}</span>
          </ChosenTicketDiv>
        </TicketSelectionDiv>
      }
      {showBookTicketButton
        ? <TicketSelectionDiv>
          <h2>Fechado! O total ficou em <b>R$ {ticketValue}.</b> Agora é só confirmar:</h2>
          <StyledButton type="submit">RESERVAR INGRESSO</StyledButton>
        </TicketSelectionDiv>
        : <></>
      }
    </form>
  );
};
