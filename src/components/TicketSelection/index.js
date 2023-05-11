import { useState, useEffect } from 'react';
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
    if (parseInt(e.target.value) === 100) {
      setShowBookTicketButton(true);
      setType('Online');
    }
    else{
      setShowBookTicketButton(false);
    }
    console.log(e.target.value);
  };

  function handleClick() {
    setShowRadioInput(false);
    setShowBookTicketButton(false);
  }

  return(
    <>{showRadioInput 
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
        <StyledButton onClick={handleClick}>RESERVAR INGRESSO</StyledButton>
      </TicketSelectionDiv> 
      : <></>
    }
    </>
  );
}

