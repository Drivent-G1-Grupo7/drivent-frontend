import { TicketSelectionDiv } from './TicketSelectionDiv';

export default function TicketTypeSelection() {
  return(
    <TicketSelectionDiv>
      <h2>Primeiro, escolha sua modalidade de ingresso</h2>
      <label htmlFor="presencial">
        <input type="radio" id="presencial" name="ingresso" value="presencial"/>
        <div>
          <span>Presencial</span>
          <span>R$ 250</span>
        </div>
      </label>
      <label htmlFor="online">
        <input type="radio" id="online" name="ingresso" value="online"/>
        <div>
          <span>Online</span>
          <span>R$ 100</span>
        </div>
      </label>
    </TicketSelectionDiv>
  );
}

