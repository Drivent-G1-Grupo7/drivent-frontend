import { useState } from 'react';
import RoomSelection from '../RoomSelection';
import HotelOption from './HotelSelectionOption';
import { useEffect } from 'react';

export default function HotelSelection() {
  const [isSelected, setIsSelected] = useState(false);
  const [lastSelectedHotel, setLastSelectedHotel] = useState(null);

  return (
    <>
      <HotelOption setIsSelected={setIsSelected} lastSelectedHotel={lastSelectedHotel} setLastSelectedHotel={setLastSelectedHotel}/>
      {isSelected && <RoomSelection lastSelectedHotel={lastSelectedHotel} /> }
    </>
  );
}
