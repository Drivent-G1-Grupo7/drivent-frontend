import { RoomOptions } from './RoomOption';
import { RoomBox, RoomSelectionWrapper } from './RoomSelectionWrapper';
import { useState, useEffect } from 'react';
import getRealRoomCapacity from './Utils/calculateRealRoomCapacity';
import { StyledButton } from './StyledButtom';

export default function RoomSelection({ lastSelectedHotel, setWasRoomChosen, selectedRooms, setSelectedRooms }) {
  const [hotelsWithRooms, setHotelsWithRooms] = useState(lastSelectedHotel);
  const realRoomCapacity = getRealRoomCapacity(hotelsWithRooms.Rooms);

  useEffect(() => {
    setHotelsWithRooms(lastSelectedHotel);
  }, [lastSelectedHotel]);

  function handleSubmit(event) {
    event.preventDefault();
    setWasRoomChosen(true);
  }

  return (
    <form onSubmit={handleSubmit}>
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
          {selectedRooms.length > 0 && <StyledButton type="submit">RESERVAR QUARTO</StyledButton>}
        </RoomSelectionWrapper>
      )}
    </form>
  );
}
