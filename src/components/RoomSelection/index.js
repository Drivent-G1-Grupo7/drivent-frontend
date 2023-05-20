import { RoomOptions } from './RoomOption';
import { RoomBox, RoomSelectionWrapper } from './RoomSelectionWrapper';
import mockHotelsWithRooms from './Utils/hotelsWithRoomsMock';
import { useState, useEffect } from 'react';

export default function RoomSelection({ lastSelectedHotel }) {
  const [hotelsWithRooms, setHotelsWithRooms] = useState(lastSelectedHotel);
  const [selectedRooms, setSelectedRooms] = useState([]);

  useEffect(() => {
    setHotelsWithRooms(lastSelectedHotel);
  }, [lastSelectedHotel]);

  return (
    <>
      {hotelsWithRooms !== null && (
        <RoomSelectionWrapper>
          <h2>Ótima pedida! Agora escolha seu quarto:</h2>
          <RoomBox>
            {hotelsWithRooms.map((room) => (
              <RoomOptions
                key={room.id}
                room={room}
                selectedRooms={selectedRooms}
                setSelectedRooms = {setSelectedRooms}
              />
            ))}
          </RoomBox>
        </RoomSelectionWrapper>
      )}
    </>
  );
}
