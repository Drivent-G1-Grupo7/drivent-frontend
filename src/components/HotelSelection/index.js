import { useState } from 'react';
import RoomSelection from '../RoomSelection';
import HotelOption from './HotelSelectionOption';
import ChosenRoom from '../RoomSelection/ChosenRoom';

export default function HotelSelection() {
  const [isSelected, setIsSelected] = useState(false);
  const [lastSelectedHotel, setLastSelectedHotel] = useState(null);
  const [wasRoomChosen, setWasRoomChosen] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);

  return (
    <>
      {wasRoomChosen ? (
        <ChosenRoom lastSelectedHotel={lastSelectedHotel} lastSelectedRoom={selectedRooms} setWasRoomChosen={setWasRoomChosen}/>
      ) : (
        <>
          <HotelOption
            setIsSelected={setIsSelected}
            lastSelectedHotel={lastSelectedHotel}
            setLastSelectedHotel={setLastSelectedHotel}
          />
          {isSelected && (
            <RoomSelection
              lastSelectedHotel={lastSelectedHotel}
              setWasRoomChosen={setWasRoomChosen}
              selectedRooms={selectedRooms}
              setSelectedRooms={setSelectedRooms}
            />
          )}
        </>
      )}
    </>
  );
}
