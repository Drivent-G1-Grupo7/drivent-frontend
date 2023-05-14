import { RoomOptions } from './RoomOption';
import { RoomBox, RoomSelectionWrapper } from './RoomSelectionWrapper';
import hotel1Img from '../../assets/images/hotel1.png';
import hotel2Img from '../../assets/images/hotel2.png';
import hotel3Img from '../../assets/images/hotel3.png';
import { useState } from 'react';

const mockHotelsWithRooms = [
  {
    id: 1,
    name: 'Driven Resort',
    img: hotel1Img,
    Rooms: [
      {
        id: 1,
        name: '101',
        capacity: 3,
        hotelId: 1,
      },
    ],
  },
  {
    id: 2,
    name: 'Driven Palace',
    img: hotel2Img,
    Rooms: [
      {
        id: 1,
        name: '102',
        capacity: 2,
        hotelId: 1,
      },
    ],
  },
  {
    id: 3,
    name: 'Driven World',
    img: hotel3Img,
    Rooms: [
      {
        id: 1,
        name: '103',
        capacity: 1,
        hotelId: 1,
      },
    ],
  },
];

export default function RoomSelection() {
  const [rooms, setRooms] = useState(mockHotelsWithRooms);
  return (
    <RoomSelectionWrapper>
      <h2>Ótima pedida! Agora escolha seu quarto:</h2>
      <RoomBox>
        {rooms.map((hotel) =>
          hotel.Rooms.map((room) => (
            <RoomOptions key={room.id} room={room} />
          ))
        )}
      </RoomBox>
    </RoomSelectionWrapper>
  );
}
