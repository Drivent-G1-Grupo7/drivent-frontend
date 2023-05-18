import { RoomOptions } from './RoomOption';
import { RoomBox, RoomSelectionWrapper } from './RoomSelectionWrapper';
import { useState, useEffect } from 'react';

export default function RoomSelection({ lastSelectedHotel }) {
  const [hotelsWithRooms, setHotelsWithRooms] = useState(lastSelectedHotel);

  useEffect(() => {
    setHotelsWithRooms(lastSelectedHotel);
  }, [lastSelectedHotel]);

  return (
    <>
      {hotelsWithRooms !== null &&
      <RoomSelectionWrapper>
        <h2>Ótima pedida! Agora escolha seu quarto:</h2>
        <RoomBox>
          {hotelsWithRooms.map((room) => (
            <RoomOptions key={room.id} room={room} />
          ))}
        </RoomBox>
      </RoomSelectionWrapper>
      }
    </>
  );
}
