import { RoomOptions } from './RoomOption';
import { RoomBox, RoomSelectionWrapper } from './RoomSelectionWrapper';
import { useState, useEffect } from 'react';
import getRealRoomCapacity from './Utils/calculateRealRoomCapacity';

export default function RoomSelection({ lastSelectedHotel }) {
  const [hotelsWithRooms, setHotelsWithRooms] = useState(lastSelectedHotel);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const realRoomCapacity = getRealRoomCapacity(hotelsWithRooms);

  useEffect(() => {
    setHotelsWithRooms(lastSelectedHotel);
  }, [lastSelectedHotel]);

  return (
    <>
      {hotelsWithRooms !== null && (
        <RoomSelectionWrapper>
          <h2>Ótima pedida! Agora escolha seu quarto:</h2>
          <RoomBox>
            {realRoomCapacity.map((room) => {
              return (
                <RoomOptions
                  key={room.id}
                  room={room}
                  selectedRooms={selectedRooms}
                  setSelectedRooms={setSelectedRooms}
                />
              );
            })}
          </RoomBox>
        </RoomSelectionWrapper>
      )}
    </>
  );
}
