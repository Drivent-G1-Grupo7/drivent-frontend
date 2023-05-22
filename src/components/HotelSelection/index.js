import { useState } from 'react';
import RoomSelection from '../RoomSelection';
import HotelOption from './HotelSelectionOption';
import ChosenRoom from '../RoomSelection/ChosenRoom';

export default function HotelSelection() {
  const [isSelected, setIsSelected] = useState(false);
  const [lastSelectedHotel, setLastSelectedHotel] = useState(null);
  const [wasRoomChosen, setWasRoomChosen] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [changeRoom, setChangeRoom] = useState(false);

  return (
    <>
      {wasRoomChosen ? (
        <ChosenRoom lastSelectedHotel={lastSelectedHotel} lastSelectedRoom={selectedRooms} setChangeRoom={setChangeRoom}/>
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
