import { Container, HotelSelectionWrapper, StyledHotelWrapper } from './HotelSelectionWrapper';
import hotel1Img from '../../assets/images/hotel1.png';
import hotel2Img from '../../assets/images/hotel2.png';
import hotel3Img from '../../assets/images/hotel3.png';
import { useState, useEffect } from 'react';
import useHotel from '../../hooks/api/useHotel';
import useRoom from '../../hooks/api/useRoom';
import { GRAY, YELLOW } from '../RoomSelection/Utils/colors';

const mockHotels = [
  {
    id: 1,
    name: 'Driven Resort',
    image: hotel1Img,
    vacancy: 9,
    Rooms: [
      {
        id: 1,
        name: '100',
        capacity: 1,
        hotelId: 1,
      },
      {
        id: 2,
        name: '101',
        capacity: 2,
        hotelId: 1,
      },
      {
        id: 3,
        name: '102',
        capacity: 3,
        hotelId: 1,
      },
    ],
  },
  {
    id: 2,
    name: 'Driven Palace',
    image: hotel2Img,
    vacancy: 9,
    Rooms: [
      {
        id: 4,
        name: '200',
        capacity: 3,
        hotelId: 2,
      },
      {
        id: 5,
        name: '201',
        capacity: 3,
        hotelId: 2,
      },
      {
        id: 6,
        name: '202',
        capacity: 3,
        hotelId: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Driven World',
    image: hotel3Img,
    vacancy: 9,
    Rooms: [
      {
        id: 7,
        name: '300',
        capacity: 3,
        hotelId: 3,
      },
      {
        id: 8,
        name: '301',
        capacity: 3,
        hotelId: 3,
      },
      {
        id: 9,
        name: '302',
        capacity: 3,
        hotelId: 3,
      },
    ],
  },
];

export default function HotelOption({ setIsSelected, lastSelectedHotel, setLastSelectedHotel }) {
  const [hotels, setHotels] = useState(mockHotels);
  const { getHotels } = useHotel();
  const { getRooms } = useRoom();

  useEffect(() => {
    const fetchData = async() => {
      const hotelsData = await getHotels();
      const hotelsWithRoomsData = await Promise.all(
        hotelsData.map(async(hotel) => {
          const { Rooms } = await getRooms(hotel.id);
          const vacancy = Rooms.reduce((total, room) => total + room.capacity, 0);
          return { ...hotel, Rooms, vacancy };
        })
      );
      setHotels(hotelsWithRoomsData);
    };
    fetchData().catch(setHotels(mockHotels));
  }, []);

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
