import { Container, HotelSelectionWrapper, StyledHotelWrapper } from '../HotelSelection/HotelSelectionWrapper';
import { StyledButton } from './StyledButtom';
import { YELLOW } from './Utils/colors';

export default function ChosenRoom({ lastSelectedHotel, lastSelectedRoom }) {
  return (
    <Container>
      <h2>Você já escolheu seu quarto:</h2>
      <HotelSelectionWrapper>
        {<ChosenHotel lastSelectedHotel={lastSelectedHotel} lastSelectedRoom={lastSelectedRoom} />}
      </HotelSelectionWrapper>
      <StyledButton type="submit">TROCAR DE QUARTO</StyledButton>
    </Container>
  );
}

function ChosenHotel({ lastSelectedHotel, lastSelectedRoom }) {
  const [roomId] = lastSelectedRoom;
  const room = lastSelectedHotel.Rooms.find((room) => room.id === roomId);

  return (
    <>
      <StyledHotelWrapper color={YELLOW} id={lastSelectedHotel.id} name="hotel" value={lastSelectedHotel.name}>
        <img src={lastSelectedHotel.image} alt="hotel" />
        <h3>{lastSelectedHotel.name}</h3>
        <div>
          <span>Quarto reservado</span>
          <p>{room.name} {<RoomCapacityName room={room}/>}</p>
        </div>
        <div>
          <span>Pessoas no seu quarto</span>
          <p>{room.capacity === 1 ? 'Só você' : `Você e mais ${room.capacity - 1}`}</p>
        </div>
      </StyledHotelWrapper>
    </>
  );
}

function RoomCapacityName({ room }) {
  if (room.capacity === 1) {
    return '(Single)';
  } else if(room.capacity === 2) {
    return '(Double)';
  } else if(room.capacity === 3) {
    return '(Triple)';
  }
}
