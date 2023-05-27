import { RoomOptions } from './RoomOption';
import { RoomBox, RoomSelectionWrapper } from './RoomSelectionWrapper';
import { useState, useEffect } from 'react';
import { StyledButton } from './StyledButtom';
import usePostBooking from '../../hooks/api/usePostBooking';
import useUpdateBooking from '../../hooks/api/useUpdateBooking';
import useGetBooking from '../../hooks/api/useGetBooking';

export default function RoomSelection({ lastSelectedHotel, setWasRoomChosen, selectedRooms, setSelectedRooms, booking, setBooking }) {
  const [hotelsWithRooms, setHotelsWithRooms] = useState(lastSelectedHotel);
  const { postBooking } = usePostBooking();
  const { updateBooking } = useUpdateBooking();
  const { getBooking } = useGetBooking();

  useEffect(() => {
    setHotelsWithRooms(lastSelectedHotel);
  }, [lastSelectedHotel]);

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      if (booking !== 0) {
        await updateBooking({ id: booking, room: { roomId: selectedRooms[0] } });
      } else {
        await postBooking({ roomId: selectedRooms[0] });
        const { id } = await getBooking();
        setBooking(id);
      }
      setWasRoomChosen(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {hotelsWithRooms !== null && (
        <RoomSelectionWrapper>
          <h2>Ótima pedida! Agora escolha seu quarto:</h2>
          <RoomBox>
            {hotelsWithRooms.Rooms.map((room) => {
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
