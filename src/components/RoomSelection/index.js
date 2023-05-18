import { RoomOptions } from './RoomOption';
import { RoomBox, RoomSelectionWrapper } from './RoomSelectionWrapper';
import hotel1Img from '../../assets/images/hotel1.png';
import hotel2Img from '../../assets/images/hotel2.png';
import hotel3Img from '../../assets/images/hotel3.png';
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
