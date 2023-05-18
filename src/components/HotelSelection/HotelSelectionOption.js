import { Container, HotelSelectionWrapper, StyledHotelWrapper } from './HotelSelectionWrapper';
import hotel1Img from '../../assets/images/hotel1.png';
import hotel2Img from '../../assets/images/hotel2.png';
import hotel3Img from '../../assets/images/hotel3.png';
import { useState } from 'react';

const mockHotels = [
  {
    id: 1,
    name: 'Driven Resort',
    img: hotel1Img,
  },
  {
    id: 2,
    name: 'Driven Palace',
    img: hotel2Img,
  },
  {
    id: 3,
    name: 'Driven World',
    img: hotel3Img,
  },
];

export default function HotelOption({ setIsSelected, lastSelectedHotel, setLastSelectedHotel }) {
  const [hotels, setHotels] = useState(mockHotels);

  function handleLastSelectHotel(hotel) {
    setLastSelectedHotel(hotel.id);
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
            lastSelectedHotel={hotel.id === lastSelectedHotel}
            setLastSelectedHotel={handleLastSelectHotel}
          />
        ))}
      </HotelSelectionWrapper>
    </Container>
  );
}

function Hotel({ hotel, setIsSelected, lastSelectedHotel, setLastSelectedHotel }) {
  const GRAY = '#ebebeb';
  const YELLOW = '#FFEED2';

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
        <img src={hotel.img} alt="hotel1" />
        <h3>{hotel.name}</h3>
        <div>
          <span>Tipos de acomodação:</span>
          <p>Single e Double</p>
        </div>
        <div>
          <span>Vagas disponíveis:</span>
          <p>103</p>
        </div>
      </StyledHotelWrapper>
    </>
  );
}
