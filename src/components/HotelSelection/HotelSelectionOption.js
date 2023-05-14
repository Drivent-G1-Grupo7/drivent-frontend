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

export default function HotelOption({ isSelected, setIsSelected }) {
  const [hotels, setHotels] = useState(mockHotels);
  return (
    <Container>
      <h2>Primeiro, escolha seu hotel</h2>
      <HotelSelectionWrapper>
        {hotels.map((hotel) => (
          <Hotel key={hotel.id} hotel={hotel} isSelected={isSelected} setIsSelected={setIsSelected}/>
        ))}
      </HotelSelectionWrapper>
    </Container>
  );
}

function Hotel({ hotel, isSelected, setIsSelected }) {
  const GRAY = '#ebebeb';
  const YELLOW = '#FFEED2';
  const [color, setColor] = useState(isSelected ? YELLOW : GRAY);

  function handleSelectHotel(hotel) {
    if (!isSelected) {
      setIsSelected(true);
      setColor(YELLOW);
    } else {
      setIsSelected(false);
      setColor(GRAY);
    }
  }

  return (
    <>
      <StyledHotelWrapper
        onClick={() => handleSelectHotel(hotel)}
        color={color}
        type="radio"
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
