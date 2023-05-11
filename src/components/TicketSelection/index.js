import { useState } from 'react';
import { TicketSelectionDiv } from './TicketSelectionDiv';
import { RadioInputDiv } from './RadioInputdiv';
import { StyledButton } from './StyledButton';
import { ChosenTicketDiv } from './ChosenTicketDiv';

export default function TicketTypeSelection() {
  const [value, setValue] = useState(0);
  const [type, setType] = useState('');
  const [showRadioInput, setShowRadioInput] = useState(true);
  const [showBookTicketButton, setShowBookTicketButton] = useState(false);

  const onTicketTypeChange = e => {
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowRadioInput(false);
    setShowBookTicketButton(false);
  };

  return(
    <form onSubmit={handleSubmit}>
      {showRadioInput 
        ?<TicketSelectionDiv>
          <h2>Primeiro, escolha sua modalidade de ingresso</h2>
          <RadioInputDiv>
            <label htmlFor="presencial">
              <input type="radio" id="presencial" name="ingresso" value="250" onChange={onTicketTypeChange}/>
              <div>
                <span>Presencial</span>
                <span>R$ 250</span>
              </div>
            </label>
            <label htmlFor="online">
              <input type="radio" id="online" name="ingresso" value="100" onChange={onTicketTypeChange}/>
              <div>
                <span>Online</span>
                <span>R$ 100</span>
              </div>
            </label>
          </RadioInputDiv>
        </TicketSelectionDiv>
        :<TicketSelectionDiv>
          <h2>Ingresso escolhido</h2>
          <ChosenTicketDiv>
            <span>{type}</span>
            <span>R$ {value}</span>
          </ChosenTicketDiv>
        </TicketSelectionDiv>
      }
      {showBookTicketButton 
        ?<TicketSelectionDiv>
          <h2>Fechado! O total ficou em <b>R$ {value}.</b> Agora é só confirmar:</h2>
          <StyledButton type="submit">RESERVAR INGRESSO</StyledButton>
        </TicketSelectionDiv> 
        : <></>
      }
    </form>
  );
}

