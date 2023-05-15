import { RoomOptions } from './RoomOption';
import { RoomBox, RoomSelectionWrapper } from './RoomSelectionWrapper';
import hotel1Img from '../../assets/images/hotel1.png';
import { useState } from 'react';

const mockHotelsWithRooms = {
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
    {
      id: 1,
      name: '101',
      capacity: 3,
      hotelId: 1,
    },
    {
      id: 1,
      name: '101',
      capacity: 3,
      hotelId: 1,
    },
  ],
};

export default function RoomSelection({ lastSelectedHotel }) {
  const id = lastSelectedHotel;
  const [hotelsWithRooms, setHotelsWithRooms] = useState(mockHotelsWithRooms);

  return (
    <RoomSelectionWrapper>
      <h2>Ótima pedida! Agora escolha seu quarto:</h2>
      <RoomBox>
        {hotelsWithRooms.Rooms.map((room) => (
          <RoomOptions key={room.id} room={room} />
        ))}
      </RoomBox>
    </RoomSelectionWrapper>
  );
}
