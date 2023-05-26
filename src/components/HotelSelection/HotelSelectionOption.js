import { Container, HotelSelectionWrapper, StyledHotelWrapper } from './HotelSelectionWrapper';
import { GRAY, YELLOW } from '../RoomSelection/Utils/colors';

export default function HotelOption({ hotels, setIsSelected, lastSelectedHotel, setLastSelectedHotel }) {
  function handleLastSelectHotel(hotel) {
    setLastSelectedHotel(hotel);
  }

  return (
    <Container>
      <h2>Primeiro, escolha seu hotel</h2>
      <HotelSelectionWrapper>
        {hotels.map((hotel) => (
          <Hotel
            key={hotel.id}
            hotel={hotel}
            setIsSelected={setIsSelected}
            lastSelectedHotel={hotel.Rooms === lastSelectedHotel?.Rooms}
            setLastSelectedHotel={handleLastSelectHotel}
          />
        ))}
      </HotelSelectionWrapper>
    </Container>
  );
}

function Hotel({ hotel, setIsSelected, lastSelectedHotel, setLastSelectedHotel }) {
  function handleSelectHotel(hotel) {
    setLastSelectedHotel(hotel);
    setIsSelected(true);
  }

  return (
    <>
      <StyledHotelWrapper
        onClick={() => handleSelectHotel(hotel)}
        color={lastSelectedHotel ? YELLOW : GRAY}
        id={hotel.id}
        name="hotel"
        value={hotel.name}
      >
        <img src={hotel.image} alt="hotel" />
        <h3>{hotel.name}</h3>
        <div>
          <span>Tipos de acomodação:</span>
          <p>Single e Double</p>
        </div>
        <div>
          <span>Vagas disponíveis:</span>
          <p>{hotel.vacancy}</p>
        </div>
      </StyledHotelWrapper>
    </>
  );
}
