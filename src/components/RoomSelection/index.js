import { RoomOptions } from './RoomOption';
import { RoomBox, RoomSelectionWrapper } from './RoomSelectionWrapper';
import { useState } from 'react';
import mockHotelsWithRooms from './Utils/hotelsWithRoomsMock';

export default function RoomSelection({ lastSelectedHotel }) {
  const id = lastSelectedHotel;
  const [hotelsWithRooms, setHotelsWithRooms] = useState(mockHotelsWithRooms);

  return (
    <RoomSelectionWrapper>
      <h2>Ótima pedida! Agora escolha seu quarto:</h2>
      <RoomBox>
        {hotelsWithRooms.Room.map((room) => (
          <RoomOptions key={room.id} room={room} />
        ))}
      </RoomBox>
    </RoomSelectionWrapper>
  );
}
